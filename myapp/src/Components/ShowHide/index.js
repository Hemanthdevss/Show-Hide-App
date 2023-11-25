import React, { Component } from "react";

class ShowHide extends Component {
  state = {
    isFirstNameClicked: false,
    isLastNameClicked: false,
  };

  toggleFirstName = () => {
    this.setState((prevState) => ({
      isFirstNameClicked: !prevState.isFirstNameClicked,
    }));
  };

  toggleLastName = () => {
    this.setState((prevState) => ({
      isLastNameClicked: !prevState.isLastNameClicked,
    }));
  };

  render() {
    const { isFirstNameClicked, isLastNameClicked } = this.state;
    let firstNameDisplay = null;
    let lastNameDisplay = null;

    if (isFirstNameClicked) {
      firstNameDisplay = <p>Joe</p>;
    } else {
        firstNameDisplay = null
    }

    if (isLastNameClicked) {
      lastNameDisplay = <p>Jones</p>;
    } else {
        lastNameDisplay = null
    }

    return (
      <div>
        <button onClick={this.toggleFirstName}>
          Show/Hide FirstName
        </button>
        {firstNameDisplay}
        <button onClick={this.toggleLastName}>
          Show/Hide LastName
        </button>
        {lastNameDisplay}
      </div>
    );
  }
}

export default ShowHide;
