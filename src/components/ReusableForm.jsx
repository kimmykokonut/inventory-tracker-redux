import PropTypes from 'prop-types';

const ReusableForm = (props) => {
  return(
    <>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  )
}
ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};
export default ReusableForm;