import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

const EditFlavorForm = (props) => {
  const { flavor } = props;

  function handleEditFormSubmission(e) {
    e.preventDefault();
    props.onEditTicket({
      name: e.target.name.value,
      price: e.target.price.value,
      allergens: e.target.allergens.value,
      qtyInStock: parseInt(e.target.qtyInStock.value),
      id: flavor.id
    });
  }
  return(
    <>
    <ReusableForm
    formSubmissionHandler={handleEditFormSubmission}
    buttonText="Update info" />
    </>
  );
}
EditFlavorForm.propTypes = {
  flavor: PropTypes.object,
  onEditTicket: PropTypes.func
};

export default EditFlavorForm;