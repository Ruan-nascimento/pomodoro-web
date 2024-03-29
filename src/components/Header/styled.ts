import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span i {
    font-size: 2rem;
    color: ${(props) => props.theme['green-300']};
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      outline: none;

      &:hover {
        border-bottom-color: ${(props) => props.theme['green-300']};
      }

      &.active {
        color: ${(props) => props.theme['green-300']};
      }

      i {
        font-size: 1.5rem;
      }
    }
  }
`
