import PropTypes from 'prop-types';

const Flavor = (props) => {
  const imgStyle = {
    width: '100px',
    height: 'auto'
  }
  return(
    <>
    <div onClick={() => props.whenFlavorClicked(props.id)}>
    <h3>{props.name}</h3>
    <img style={imgStyle} src={props.imgSrc} alt={props.alt} />
    <p>Price: ${props.price} per pint</p>
    <p>In stock: {props.qtyInStock} pints</p>
      </div>
    </>
  );
}

Flavor.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imgSrc: PropTypes.string,
  alt: PropTypes.string,
  available: PropTypes.string,
  price: PropTypes.string,
  allergens: PropTypes.string,
  qtyInStock: PropTypes.number,
  id: PropTypes.string,
  whenFlavorClicked: PropTypes.func
};
export default Flavor;