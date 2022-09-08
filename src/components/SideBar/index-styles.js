import styled from 'styled-components';

export const Container = styled.div`
  backdrop-filter: blur(10px);
  background-color: rgba(0,0,0,0.13);
  position: absolute;
  width: 100vw;
  height: 100vh;
  animation: ${props => props.active ? "fadein" : "fadeout"} 0.5s;
  visibility: ${props => props.active ? "" : "hidden"};
  @keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
}

`;

export const SideBarStyle = styled.div`
    background-color: white;
    width: 30vw;
    height: 100vh;
    display: flex;
    padding: 24px;
    width: 20vw;
    animation: ${props => props.active ? "fadein" : "fadeout"} 0.5s;
    visibility: ${props => props.active ? "" : "hidden"};
  @keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
}
`;



export const MenuStyle = styled.div`
    margin-top: 90px;
    margin-left: 20px;
    
`