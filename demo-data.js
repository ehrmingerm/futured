/* Fictional content for the demo. No real people, project or decisions. */
window.DEMO_NAMES = {
  "demo-coordinator": "Alex Martin (coordinator)",
  "demo-member-a": "Member A",
  "demo-member-b": "Member B"
};

window.DEMO_DATA = {
  meetings: {
    m1: { code: "M1", date: "2026-09-15", status: "Held", time: "10:00–11:30 (Paris time)", format: "Video call",
      topics: "Welcome and introductions; how the committee will work; first look at the project.",
      minutesStatus: "Approved", minutesFile: { id: "sample-minutes.pdf", name: "Sample_minutes_M1.pdf" } },
    m2: { code: "M2", date: "2026-10-20", status: "Held", time: "10:00–11:30 (Paris time)", format: "Video call",
      topics: "Agreement on the terms of reference; glossary method; payment process.",
      slidesFile: { id: "sample-slides.pdf", name: "Sample_slides_M2.pdf" },
      minutesStatus: "Circulated", minutesFile: { id: "sample-minutes.pdf", name: "Sample_minutes_M2.pdf" } },
    m3: { code: "M3", date: "2026-11-24", status: "Planned", time: "10:00–11:00 (Paris time)", format: "Video call",
      topics: "Feedback from the consortium meeting; glossary workshop on priority terms." },
    m4: { code: "M4", month: "2027-01", status: "Planned", format: "Video call", wp: "WP1",
      topics: "WP1 presents its first documents. The committee starts working on WP1.",
      note: "Fictional calendar for the demo." },
    m5: { code: "M5", month: "2027-03", status: "Planned", format: "Hybrid", wp: "WP4",
      topics: "Committee input for WP1. WP4 presents its participant materials." }
  },

  documents: {
    tor: { title: "Terms of reference (sample)", category: "Governance", status: "Validated", version: "1",
      date: "2026-10-20", key: "Yes", file: { id: "sample-terms.pdf", name: "Sample_terms_of_reference.pdf" },
      note: "Describes the committee's role and how it works with the research team." },
    briefing: { title: "Work packages – briefing note (sample)", category: "Reference", status: "Reference",
      version: "1", date: "2026-11-10", key: "Yes", file: { id: "sample-briefing.pdf", name: "Sample_briefing_note.pdf" },
      note: "Plain-language description of each work package." },
    timesheet: { title: "Timesheet (sample)", category: "Practical", status: "In use",
      file: { id: "sample-timesheet.xlsx", name: "Sample_timesheet.xlsx" },
      note: "Send it to the coordinator at the end of each month." },
    glossdoc: { title: "Glossary – working version", category: "Glossary", status: "Draft", version: "0.2",
      date: "2026-11-05", note: "The terms also appear in the Glossary tab." }
  },

  log: {
    l1: { dateAsked: "2026-09-15", dateAddressed: "2026-10-05", type: "Question", topic: "Access to interim findings",
      comments: "How will members see results while the work is in progress?",
      piFeedback: "Each WP lead presents progress to the committee at least once a year, in plain language." },
    l2: { dateAsked: "2026-10-20", dateAddressed: "2026-11-02", type: "Statement", topic: "Wording in participant documents", wp: "WP4",
      comments: "The committee recommends avoiding the word “resistant” when describing participants.",
      piFeedback: "Agreed. The wording will be changed in the next version of the information sheet." },
    l3: { dateAsked: "2026-10-20", type: "Question", topic: "Definition of a favourable course", wp: "WP1",
      comments: "Which definition will the models use, and can the committee comment on it?" },
    l4: { dateAsked: "2026-11-02", dateAddressed: "2026-11-02", type: "Answer", topic: "Observing a team meeting", wp: "WP1",
      comments: "WP1 replied to the committee's earlier request.",
      piFeedback: "Members may observe one WP1 team meeting online. Attendance is voluntary." }
  },

  decisions: {
    d1: { code: "M2-D1", meeting: "M2", date: "2026-10-20", topic: "Governance", text: "The terms of reference are adopted.", wp: "WP5", status: "Active" },
    d2: { code: "M2-D2", meeting: "M2", date: "2026-10-20", topic: "Glossary", text: "Researchers propose definitions first; the committee then reviews them.", wp: "WP5", status: "Active" },
    d3: { code: "M1-D1", meeting: "M1", date: "2026-09-15", topic: "Calendar", text: "Meetings take place every six to eight weeks by video call.", wp: "WP5", status: "Superseded", replaces: "Replaced by a calendar agreed at M2" }
  },

  actions: {
    a1: { code: "M2-A1", meeting: "M2", text: "Share the glossary working version with members.", owner: "Coordinator", due: "2026-11-15", status: "Done" },
    a2: { code: "M2-A2", meeting: "M2", text: "Send the questions on data access to the PI.", owner: "Coordinator", due: "2026-11-30", status: "Open" },
    a3: { code: "M2-A3", meeting: "M2", text: "Send monthly timesheets.", owner: "All members", status: "Recurring", notes: "Monthly" },
    a4: { code: "M1-A1", meeting: "M1", text: "Propose a name for the committee.", owner: "All members", due: "2026-10-15", status: "Done" }
  },

  questions: {
    q1: { subject: "Preparing for meetings", details: "How much time should we plan to read the documents before each meeting?",
      askedOn: "2026-10-25", status: "Answered", response: "Around one hour. Documents are sent at least one week before.",
      respondedBy: "Coordinator", answeredOn: "2026-10-27" },
    q2: { subject: "Payment dates", details: "When are timesheets paid after they are sent?", askedOn: "2026-11-12", status: "Open" }
  },

  glossary: {
    g1: { term: "Cohort study", list: "General", category: "Methodology", order: "1", status: "IN REVIEW",
      definition: "A study that follows a group of people over time and measures them several times.",
      inFD: "Sample entry: the project uses two existing cohort studies.", source: "Sample source" },
    g2: { term: "Bias", list: "General", category: "Methodology", order: "2", status: "TO DEFINE" },
    g3: { term: "Missing data", list: "General", category: "Analysis", order: "1", status: "TO DEFINE" },
    g4: { term: "Statistical power", list: "General", category: "Analysis", order: "2", status: "PROPOSED",
      definition: "The chance that a study detects an effect when the effect is real.",
      note: "Sample draft, to be reviewed by researchers." },
    g5: { term: "Questionnaire", list: "General", category: "Instruments and measures", order: "1", status: "TO DEFINE" },
    g6: { term: "PROM (patient-reported outcome measure)", list: "General", category: "Outcome", order: "1", status: "AGREED",
      fr: "mesure des résultats rapportés par le patient", de: "patientenberichtetes Ergebnismaß",
      definition: "A questionnaire in which people report how they feel or function, without interpretation by a clinician.",
      perspectives: "Sample perspective: some members prefer “person-reported” to “patient-reported”.", source: "Sample source" },
    g7: { term: "Remission", list: "General", category: "Psychiatry", order: "1", status: "TO CLARIFY",
      definition: "A period when symptoms have dropped to a low level.",
      perspectives: "Sample perspective: remission as measured may differ from recovery as lived." },
    g8: { term: "Psychotherapy", list: "General", category: "Interventions", order: "1", status: "TO DEFINE" },
    g9: { term: "Demographics", list: "General", category: "General", order: "1", status: "TO DEFINE" },
    g10: { term: "Lived experience", list: "General", category: "Concepts and wording", order: "1", status: "TO DEFINE" },
    o1: { term: "Work package (WP)", list: "Others", theme: "A", order: "1", status: "PROPOSED",
      definition: "A block of the project with its own lead, tasks and budget." },
    o2: { term: "Deliverable", list: "Others", theme: "A", order: "2", status: "PROPOSED",
      definition: "A result the project has promised the funder, with a due date." },
    o3: { term: "Informed consent", list: "Others", theme: "D", order: "1", status: "PROPOSED",
      definition: "Agreeing to take part with all the information needed, and the right to stop." }
  },

  agenda: {
    e1: { date: "2026-12-10", kind: "WP input", wp: "WP1", title: "WP1 lists the decisions where the committee's input is useful.", confirmed: "To be confirmed" },
    e2: { month: "2027-02", kind: "Milestone", wp: "WP1", title: "Committee comments on WP1 definitions.", confirmed: "To be confirmed" }
  },

  inbox: {
    "demo-member-b": { items: [
      { id: "s1", kind: "question", type: "Question", wp: "WP4", at: "2026-11-16T09:00:00Z",
        text: "Will participants in the trial be told about the committee's role?" },
      { id: "s2", kind: "term", term: "Placebo", where: "WP4 information sheet", at: "2026-11-17T09:00:00Z" }
    ] }
  }
};
