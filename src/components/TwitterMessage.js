import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: props.maxChars,
      charCount: 280,
      message: ""
    };
  }

  updateAll = (event) => {
    this.countChars(event)
    this.saveMessage(event)
  }

  countChars = (event) => {
    this.setState({
      charCount: 280 - event.target.value.length
    })
  }

  saveMessage = (event) => {
    this.setState({
      message: event.target.value
    }, () => {console.log(this.state.message)})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          onChange={event => this.updateAll(event)} 
          type="text" 
          name="message" 
          id="message"
          value={this.state.message}
        />
        <p>{this.state.charCount}</p>
      </div>
    );
  }
}

export default TwitterMessage;
