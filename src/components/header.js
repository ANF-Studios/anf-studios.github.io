import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/#">Black Frog Studios</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/creations">Creations</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
