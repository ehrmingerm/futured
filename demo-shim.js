/* Stand-in for the claude.ai storage, so the page runs on its own.
   Everything stays in the browser: changes disappear when the page is reloaded. */
(function () {
  var ROLE_KEY = "demo-role";
  var role = "editor";
  try { role = localStorage.getItem(ROLE_KEY) || "editor"; } catch (e) {}

  var store = {};
  var data = window.DEMO_DATA || {};
  Object.keys(data).forEach(function (c) {
    store[c] = new Map(Object.entries(JSON.parse(JSON.stringify(data[c]))));
  });
  var listeners = {};
  function snap(c) {
    var m = store[c] || new Map();
    return {
      docs: Array.from(m.entries()).map(function (e) { var d = e[1]; return { id: e[0], exists: true, data: function () { return d; } }; }),
      metadata: { fromCache: false, hasPendingWrites: false }
    };
  }
  function emit(c) { (listeners[c] || []).forEach(function (cb) { cb(snap(c)); }); }

  var db = {
    collection: function (c) {
      return { onSnapshot: function (cb) { (listeners[c] = listeners[c] || []).push(cb); setTimeout(function () { cb(snap(c)); }, 30); return function () {}; } };
    },
    doc: function (path) {
      var parts = path.split("/"), c = parts[0], id = parts[1];
      return {
        set: function (d) { (store[c] = store[c] || new Map()).set(id, JSON.parse(JSON.stringify(d))); emit(c); return Promise.resolve(); },
        delete: function () { if (store[c]) store[c].delete(id); emit(c); return Promise.resolve(); },
        get: function () { var has = !!(store[c] && store[c].has(id)); return Promise.resolve({ id: id, exists: has, data: function () { return has ? store[c].get(id) : undefined; } }); }
      };
    }
  };

  var names = window.DEMO_NAMES || {};
  var me = role === "editor" ? "demo-coordinator" : "demo-member-a";
  var user = {
    canEdit: function () { return Promise.resolve(role === "editor"); },
    can: function () { return Promise.resolve(true); },
    id: function () { return Promise.resolve(me); },
    profiles: function (ids) {
      var out = {};
      [].concat(ids).forEach(function (i) { out[i] = { id: i, name: names[i] || "", isMe: i === me }; });
      return Promise.resolve(out);
    }
  };

  /* Files: samples live in files/; files added during the demo stay in memory */
  window.LERP_BLOB_BASE = "files/";
  var local = {};
  var nativeFetch = window.fetch.bind(window);
  window.fetch = function (u) {
    var m = /^files\/(local-[^/?#]+)/.exec(String(u));
    if (m && local[decodeURIComponent(m[1])]) return Promise.resolve(new Response(local[decodeURIComponent(m[1])]));
    return nativeFetch.apply(null, arguments);
  };
  var assets = {
    upload: function (f) { var id = "local-" + Date.now(); local[id] = f; return Promise.resolve({ id: id, url: URL.createObjectURL(f), sizeBytes: f.size, contentType: f.type }); }
  };
  var downloads = {
    save: function (req) {
      var blob = req.data instanceof Blob ? req.data : new Blob([req.data]);
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob); a.download = req.filename;
      document.body.appendChild(a); a.click(); a.remove();
      return Promise.resolve({ status: "saved" });
    }
  };

  window.claude = {
    use: function (name) {
      var map = { db: db, user: user, assets: role === "editor" ? assets : null, downloads: downloads };
      return Promise.resolve(map[name] || null);
    }
  };

  /* Demo bar: switch between the coordinator's view and a member's view */
  function bar() {
    var b = document.createElement("div");
    b.className = "demo-bar";
    b.innerHTML = '<div class="wrap"><span><b>Demo with fictional content.</b> Changes are kept until the page is reloaded.</span>' +
      '<span class="demo-switch" role="group" aria-label="View as"><span>View as</span>' +
      '<button type="button" data-role="editor" aria-pressed="' + (role === "editor") + '">Coordinator</button>' +
      '<button type="button" data-role="member" aria-pressed="' + (role === "member") + '">Committee member</button></span></div>';
    b.addEventListener("click", function (ev) {
      var t = ev.target.closest("[data-role]"); if (!t) return;
      try { localStorage.setItem(ROLE_KEY, t.getAttribute("data-role")); } catch (e) {}
      location.reload();
    });
    document.body.insertBefore(b, document.body.firstChild);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bar); else bar();
})();
