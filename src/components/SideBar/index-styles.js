import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const SideBarStyle = styled.div`
    background-color: white;
    width: 30vw;
    height: 100vh;
    display: flex;
    padding: 24px;
    width: 20vw;
    animation-name: ${props => props.active ? "sideBarIn" : "sideBarOut"};
    animation-duration: 1s;
    @keyframes sideBarIn {
    from {
      width: 0vw;
    }
    to {
      width: 20vw;
    }
  }
  @keyframes sideBarOut {
    from {
      width: 20vw;
    }
    to {
      width: 0vw;
    }
  }
`;

export const MenuStyle = styled.div`
    margin-top: 90px;
    margin-left: 20px;

`