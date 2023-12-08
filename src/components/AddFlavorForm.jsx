
const AddFlavorForm = (props) => {
  function handleCreateFlavorFormSubmission(e) {
    e.preventDefault();
    console.log(e.target.name.value);
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
export default AddFlavorForm;