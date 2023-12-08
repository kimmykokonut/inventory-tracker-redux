import React from "react";
import Menu from "./Menu";
import AddFlavorForm from "./AddFlavorForm";
import FlavorDetail from "./FlavorDetail";
import EditFlavorForm from "./EditFlavorForm";
import reeses from "./../assets/reeses.jpg";
import oreo from "./../assets/oreo.jpeg";
import sorbet from "./../assets/sorbet.jpeg";

const flavorArray = [
  {
    name: 'Reese\'s Nightmare',
    imgSrc: reeses,
    alt: 'Chocolate reeses flavor ice cream',
    available: 'classic',
    price: '$4.00',
    allergens: 'peanuts',
    qtyInStock: 130,
    id: '1'
  },
  {
    name: 'Coffee Oreo',
    imgSrc: oreo,
    alt: 'Coffee ice cream with oreos in a cone',
    available: 'seasonal',
    price: '$3.00',
    allergens: 'wheat',
    qtyInStock: 130,
    id: '2',
  },
  {
    name: 'Raspberry Sorbet',
    imgSrc: sorbet,
    alt: 'Raspberry sorbet in a cup with a mint leaf',
    available: 'classic',
    price: '$2.00',
    allergens: 'none',
    qtyInStock: 130,
    id: '3'
  },
];

class IceCreamControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      menuList: flavorArray,
      selectedFlavor: null,
      editing: false
    };
  }
  handleClick = () => {
    if (this.state.selectedFlavor != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedFlavor: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }
  handleCreateFlavor = (newFlavor) => {
    const newMenuList = this.state.menuList.concat(newFlavor);
    this.setState({ menuList: newMenuList, formVisibleOnPage: false });
  }
  handleChangingSelectFlavor = (id) => {
    const selectFlavor = this.state.menuList.filter(flavor => flavor.id === id)[0];
    this.setState({ selectedFlavor: selectFlavor });
  }
  handleEditClick = () => {
    console.log('reached');
    this.setState({editing: true});
  }
  handleEditFlavor = (flavorToEdit) => {
    const editedFlavorList = this.state.menuList
    .filter(flavor => flavor.id !== this.state.selectedFlavor.id)
    .concat(flavorToEdit);
    this.setState({
      menuList: editedFlavorList,
      editing: false,
      selectedFlavor: null
    });
  }
  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentVisibleState = <EditFlavorForm 
      flavor = {this.state.selectedFlavor} 
      onEditTicket = {this.handleEditFlavor} />
      buttonText="Return to menu";
    } else if (this.state.selectedFlavor != null) {
      currentVisibleState = <FlavorDetail 
      flavor={this.state.selectedFlavor}
      onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Menu";
    } else if (this.state.formVisibleOnPage) {
      currentVisibleState = <AddFlavorForm
        onCreateFlavor={this.handleCreateFlavor} />
      buttonText = "Return to Menu"
    } else {
      currentVisibleState = <Menu
        menuList={this.state.menuList} onFlavorSelection={this.handleChangingSelectFlavor} />;
      buttonText = "Add custom flavor"
    }
    return (
      <>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        <hr />
      </>
    );
  }
}
export default IceCreamControl;