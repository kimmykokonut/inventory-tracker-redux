import PropTypes from 'prop-types';



const FlavorDetail = (props) => {
  const imgStyle = {
    width: '100px',
    height: 'auto'
  }
  const { flavor } = props;
  return (
    <>
    <h1>Flavor Facts</h1>
    <h3>{flavor.name}</h3>
    <img style={imgStyle} src={flavor.imgSrc} alt={flavor.alt}/>
    <p>{flavor.price}</p>
    <p>{flavor.available}</p>
    <p>{flavor.allergens}</p>
    <p>{flavor.qtyInStock}</p>
    </>
  );
}
FlavorDetail.propTypes = {
  flavor: PropTypes.object
}

export default FlavorDetail;