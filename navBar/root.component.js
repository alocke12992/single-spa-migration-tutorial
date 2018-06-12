import React from 'react'
import { navigateToUrl } from 'single-spa'


const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a onClick={() => navigateToUrl('/')} className="brand-logo">single-spa</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {menuItems()}
      </ul>
    </div>
  </nav>
)

function menuItems() {
  return (
    <div>
      <li><a onClick={() => navigateToUrl('/')}>Home</a></li>
      <li><a onClick={() => navigateToUrl('/pokedex')}>Pokemon</a></li>
      <li><a onClick={() => navigateToUrl('/huge_apps')}>Huge Apps</a></li>
    </div>
  )
}



export default NavBar