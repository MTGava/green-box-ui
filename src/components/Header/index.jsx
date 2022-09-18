import React, { useEffect, useState } from 'react';
import { HeaderStyle, ListStyle, ListItemStyle } from './index-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRightFromBracket, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from '../../components/Image';
import GreenBoxIcon from '../../assets/green-box.png'
import SideBar from '../SideBar';
import Divisor from '../Divisor';
import TextLink from '../TextLink';

function Header() {
  const [active, setActive] = useState(false)
  const [barWidth, setBarWidht] = useState('0px')

  useEffect(() => {
    if (active) {
      setBarWidht("300px")
    } else {
      setBarWidht("0")
    }
  }, [active])

  return (
    <>
      <SideBar barWidth={barWidth} active={active}/>
      <HeaderStyle>
        <FontAwesomeIcon icon={active ? faXmark : faBars} color="#739963" fontSize={32} cursor="pointer"
          onClick={() => {
            setActive(!active)
          }} style={{ "zIndex": "5" }}
        />
        <Image src={GreenBoxIcon}
          width="80px"
          height="80px"
          style={{
            "position": "fixed",
            "left": "50%"
          }}
        />
        <ListStyle>
          <ListItemStyle>
            <TextLink to="/perfil">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "4px" }} />
              Perfil
            </TextLink>
          </ListItemStyle>
          <Divisor />
          <ListItemStyle>
            <TextLink to="/">
              <FontAwesomeIcon icon={faRightFromBracket} style={{ marginRight: "4px" }} />
              Sair
            </TextLink>
          </ListItemStyle>
        </ListStyle>
      </HeaderStyle>
    </>
  )
}

export default Header;