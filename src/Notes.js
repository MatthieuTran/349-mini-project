import { Component } from "react";

class Notes extends Component {
  constructor(props) {
    super(props);

    this.update()
  }

  update() {
    this.notes = JSON.parse(localStorage.getItem("Notes"));
    if (!this.notes) {
      this.notes = [];
    }

    this.notesItems = this.notes.map((note) => (
      <div className="note-item">
        <textarea id="note-txt" value={note} disabled="True" />
        <br />
        <br />
      </div>
    ));

    this.handleClear = this.handleClear.bind(this);
  }

  handleClear(event) {
    localStorage.removeItem('Notes');
    this.update();
    alert('Deleted all notes!')
    this.forceUpdate();
  }

  render() {
    return (
      <div className="create-note">
        <h2>Here are your Notes!</h2>
        <br />
        <button id="delete" onClick={this.handleClear} className="nav-btn">Delete all Notes</button>
        <br />

        {this.notesItems}
      </div>
    );
  }
}

export default Notes;
