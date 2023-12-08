import PropTypes from 'prop-types';

const Flavor = (props) => {
  
  return(
    <>
    <h3>{props.name}</h3>
      <p><em>{props.available}</em></p>
    <p>Price: {props.price}</p>
    <p>Allergens: {props.allergens}</p>
    <p>In stock: {props.qtyInStock}</p>
    </>
  );
}

Flavor.propTypes = {
  name: PropTypes.string,
  available: PropTypes.string,
  price: PropTypes.string,
  allergens: PropTypes.string,
  qtyInStock: PropTypes.string
};
export default Flavor;