import React from "react";
import Menu from "./Menu";
import AddFlavor from "./AddFlavor";

class IceCreamControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage}));
  }
  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentVisibleState = <AddFlavor />
      buttonText="Return to Menu"
    } else {
      currentVisibleState = <Menu />
      buttonText="Add custom flavor"
    }
    return (
      <>
      {currentVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>

      <hr />
        <h3>Flavor Detail</h3>
        <h3>Edit Form</h3>
      </>
    );
  }
}
export default IceCreamControl;