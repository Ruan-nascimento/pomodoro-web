import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styled'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <i className="bi bi-smartwatch"></i>
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <i className="bi bi-stopwatch"></i>
        </NavLink>
        <NavLink to="history" title="Historico">
          <i className="bi bi-compass"></i>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
