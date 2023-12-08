import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const AddFlavorForm = (props) => {
  function handleCreateFlavorFormSubmission(e) {
    e.preventDefault();
    props.onCreateFlavor({
      name: e.target.name.value,
      price: e.target.price.value,
      allergens: e.target.allergens.value,
      qtyInStock: parseInt(e.target.qtyInStock.value),
      id: v4()
    })
  }
  return (
    <>
      <h3>Custom Flavor Form</h3>
      <form onSubmit={handleCreateFlavorFormSubmission}>
        <label>Name: <input
          type='text'
          name='name'
          placeholder="i.e. Rocky Road" /> </label>
          <br />
        <label>Price: <input
          type='text'
          name='price'
          placeholder="$?" /> </label>
          <br />
        <label>Allergens: <input
          type='text'
          name='allergens'
          placeholder="peanuts" /> </label>
          <br />
        <label>Quantity: <input
          type='text'
          name='qtyInStock'
          placeholder="how many pints available" /> </label>
        <button type="submit">Create!</button>
      </form>
    </>
  );
}
AddFlavorForm.propTypes = {
  onCreateFlavor: PropTypes.func
}
export default AddFlavorForm;