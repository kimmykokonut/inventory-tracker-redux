import React from "react";
import Menu from "./Menu";
import AddFlavorForm from "./AddFlavorForm";

const flavorArray = [
  {
    name: 'Reese\'s Nightmare',
    available: 'classic',
    price: '$4.00',
    allergens: 'peanuts',
    qtyInStock: 130
  },
  {
    name: 'Coffee Oreo',
    available: 'seasonal',
    price: '$3.00',
    allergens: 'wheat',
    qtyInStock: 130
  },
  {
    name: 'Raspberry Sorbet',
    available: 'classic',
    price: '$2.00',
    allergens: 'none',
    qtyInStock: 130
  },
];

class IceCreamControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      menuList: flavorArray
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage}));
  }
  handleCreateFlavor = (newFlavor) => {
    const newMenuList = this.state.menuList.concat(newFlavor);
    this.setState({menuList: newMenuList, formVisibleOnPage: false});
  }
  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentVisibleState = <AddFlavorForm 
      onCreateFlavor={this.handleCreateFlavor} />
      buttonText="Return to Menu"
    } else {
      currentVisibleState = <Menu 
      menuList={this.state.menuList}/>;
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