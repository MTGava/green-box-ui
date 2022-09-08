import React from 'react';
import { ContainerUser } from './index-styles';

function User(props) {
  return (
    <>
        <ContainerUser top={props.top} main={props.main}>
            {props.children}
        </ContainerUser>
    </>
  )
}

export default User;