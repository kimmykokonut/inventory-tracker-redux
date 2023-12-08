import Flavor from "./Flavor";
import PropTypes from 'prop-types';

const Menu = (props) => {
  let currentInv = props.menuList;
  
  return(
    <>
      <h2>Current Menu</h2>
      {currentInv.map((flavor) =>
        <Flavor
        whenFlavorClicked={ props.onFlavorSelection }
        name={flavor.name}
        imgSrc={flavor.imgSrc}
        price={flavor.price}
        qtyInStock={flavor.qtyInStock}
        id={flavor.id}
        key={flavor.id} />
      )}
    </>
  );
}
Menu.propTypes = {
  menuList: PropTypes.array,
  onFlavorSelection: PropTypes.func
};
export default Menu;