import React from 'react';
import ButtonQuantity from '../ButtonQuantity';

 import { QuantityValue } from './index-styles';

function Quantity(props) {
  return (
    <>
      <ButtonQuantity buttonWidth="50px" onClick={() => props.decrementFunction()}>-</ButtonQuantity>
      <QuantityValue>{props.quantityValue}</QuantityValue>
      <ButtonQuantity buttonWidth="50px" onClick={() => props.incrementFunction()}>+</ButtonQuantity>
    </>
  );
}

export default Quantity;