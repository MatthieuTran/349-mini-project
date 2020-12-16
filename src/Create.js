import { Component } from "react";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("New Note: " + this.state.value);
    let notes = localStorage.getItem('Notes');
    if (!notes) {
        notes = [];
    } else {
        notes = JSON.parse(notes);
    }

    notes.push(this.state.value);

    console.log(notes)
    alert('Note is stored!')
    
    localStorage.setItem('Notes', JSON.stringify(notes));
    event.preventDefault();
  }

  render() {
    return (
      <div className="create-note">
        <h2>Create a New Note!</h2>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="note-txt">Note:</label>
          <br />
          <textarea
            id="note-txt"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Insert your note here!"
          />

          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Create;
