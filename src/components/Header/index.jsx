import React, { useState } from 'react';
import { HeaderStyle } from './index-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from '../../components/Image';
import GreenBoxIcon from '../../assets/green-box.png'
import SideBar from '../SideBar';
import { Link } from 'react-router-dom';

function Header() {
  const [active, setActive] = useState(false)
  return (
    <>
    {active ? <SideBar active={true} hide={false}/> : <SideBar active={false} hide={true}/>}
    <HeaderStyle>
        <FontAwesomeIcon icon={active ? faXmark : faBars} color="#739963" fontSize={50} cursor="pointer"
        onClick={()=>{
            setActive(!active)
        }} style={{"z-index": "999"}}
        />
        <Image src={GreenBoxIcon} 
        width="80px"
        height="80px"
        />
        <Link to="/perfil">
          <FontAwesomeIcon icon={faUser} color="#739963" fontSize={50} cursor="pointer"/>
        </Link>
        
    </HeaderStyle>
    </>
  )
}

export default Header;