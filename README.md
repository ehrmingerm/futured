# Committee platform – demo

Demonstration version of a shared platform for a lived experience committee in a research project. **All content is fictional**: people, dates, decisions, documents and glossary entries are examples, shown only to illustrate the structure.

## What the platform contains

| Tab | Content |
| --- | --- |
| Overview | Next and last meeting, counters, upcoming items, key documents |
| Meetings | One entry per meeting: date, topics, slides, minutes and their status |
| Documents | Key documents (terms of reference, briefing notes, timesheet, references) |
| Log | Questions, statements and answers exchanged with the research team: date asked, date addressed, type, topic, comments, PI feedback |
| Decisions & actions | Decisions and actions recorded in the minutes |
| Questions & answers | Members' questions to the coordinator, and the answers |
| Glossary | General list (terms to work on, by category) and Others; status of each term |
| Agenda | Meetings, work package milestones and actions with a due date |

## Two views

The bar at the top switches between:

- **Coordinator**: adds, edits and deletes content, uploads files, turns members' submissions into log entries, answers or glossary terms.
- **Committee member**: reads everything, sends a question or a statement, proposes a glossary term.

## How the demo runs

`index.html` is the platform page. `demo-data.js` holds the fictional content and `demo-shim.js` replaces the online storage with storage in the browser: changes made during the demo disappear when the page is reloaded. The sample files are in `files/`.

To open it locally, serve the folder (for example `python3 -m http.server`) and go to `http://localhost:8000`.
