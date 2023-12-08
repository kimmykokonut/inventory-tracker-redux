import Flavor from "./Flavor";
import PropTypes from 'prop-types';

const Menu = (props) => {
  const flavorArray = [
    {
      name: 'Reese\'s Nightmare',
      available: 'classic',
      price: '$4.00',
      allergens: 'peanuts',
      qtyInStock: '130'
    },
    {
      name: 'Coffee Oreo',
      available: 'seasonal',
      price: '$3.00',
      allergens: 'wheat',
      qtyInStock: '130'
    },
    {
      name: 'Raspberry Sorbet',
      available: 'classic',
      price: '$2.00',
      allergens: 'none',
      qtyInStock: '130'
    },
  ];
  
  return(
    <>
      <h2>Menu</h2>
      {flavorArray.map((flavor, index) =>
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
export default Menu;