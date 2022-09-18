import React, { useEffect, useState } from 'react';
import { ContainerStyle, Container, Title, QuantityContainer, RewardContainer, TotalPoints } from './index-styles';
import Image from '../Image'
import Quantity from '../Quantity'
import { faSackDollar, faCoins } from '@fortawesome/free-solid-svg-icons';
import ButtonQuantity from '../ButtonQuantity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card(props) {
  const [quantityValue, setQuantityValue] = useState(1)
  const [totalValue, setTotalValue] = useState(0)

  useEffect(() => {
    if(incrementValue) {
      setTotalValue(props.points * quantityValue);
    } else {
      setTotalValue(props.points / quantityValue);
    }
  }, [quantityValue])

  const decrementValue = () => {
    if(quantityValue > 1) {
      setQuantityValue(quantityValue - 1);
    }
  }

  const incrementValue = () => {
    setQuantityValue(quantityValue + 1);
  }

  return (
    <ContainerStyle>
      <Image src={props.image} width="100%" height="60%" style={{"borderRadius": "8px 8px 0 0" }} />
      <Container>
        <Title>{props.title} R$ {props.value}</Title>
        <QuantityContainer>
         <Quantity          
            incrementFunction={incrementValue} 
            decrementFunction={decrementValue} 
            quantityValue={quantityValue} 
            totalValue={totalValue}/>
        </QuantityContainer>
        <RewardContainer>
          <ButtonQuantity buttonWidth="60px">
            <FontAwesomeIcon icon={faSackDollar} />
          </ButtonQuantity>
          <TotalPoints>
              <FontAwesomeIcon icon={faCoins} color="#739963" fontSize={14} style={{ "marginRight": "2px" }} />
              {totalValue}
            </TotalPoints>
        </RewardContainer>
      </Container>
    </ContainerStyle>
  )
}
export default Card;