import React from "react";
import Menu from "./Menu";
import AddFlavorForm from "./AddFlavorForm";
//import baseMenu...

class IceCreamControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
      //menuList: baseMenu
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
      currentVisibleState = <AddFlavorForm />
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