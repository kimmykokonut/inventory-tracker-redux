import Flavor from "./Flavor";
import PropTypes from 'prop-types';

const Menu = (props) => {
  let currentInv = props.menuList;
  
  return(
    <>
      <h2>Current Menu</h2>
      {currentInv.map((flavor, index) =>
        <Flavor
        name={flavor.name}
        available={flavor.available}
        price={flavor.price}
        allergens={flavor.allergens}
        qtyInStock={flavor.qtyInStock}
        key={index} />
      )}
    </>
  );
}
Menu.propTypes = {
  menuList: PropTypes.array
};
export default Menu;