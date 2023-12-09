import PropTypes from 'prop-types';

const RestockForm = (props) => {
  const { flavor } = props;

  function handleRestockFormSubmission(e) {
    e.preventDefault();
    props.onRestockItem(130 * parseInt(e.target.restockQty.value));
    // const restockQty = parseInt(e.target.restockQty);
    // console.log(typeof restockQty);
    // if (!isNaN(restockQty)) {
    //   console.log('restocking', restockQty);
    //   //props.onRestockItem(restockQty);
    // } else {
    //   console.log('invalid qty');
    // }
  }
  return (
    <>
      <h3>Restock Form for {flavor.name}</h3>
      <p>Current quantity: {flavor.qtyInStock} pints</p>
      <form onSubmit={handleRestockFormSubmission}>
        <label>Quantity: <input
          type='text'
          name='restockQty'
          placeholder="How many pails? (1 pail = 130 pints" /> </label>
        <br />
        <button type="submit">Order by the pail!</button>
      </form>
    </>
  );
}
RestockForm.propTypes = {
  flavor: PropTypes.object,
  onRestockItem: PropTypes.func
}
export default RestockForm;