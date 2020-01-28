import React from "react"
// import { Link } from "gatsby"
import LocalizedLink from "./LocalizedLink"
import "./header.css"
import fbIcon from '../images/facebook-icon.png'

class Header extends React.Component {
  state = {
    visible: false,
  }

  showMobileMenu = () => {
    this.setState(prevState => {
      return { visible: !prevState.visible }
    })
  }

  render() {
    return (
      <header>
        <section className="mobile-nav">
         
            <a href="https://www.facebook.com/vitinnovavitinnova/" target='_blank'><img src={fbIcon} alt=''/></a>
          
       
          {this.state.visible ? (
            <div onClick={this.showMobileMenu} className="burger-icon-close">
              <span>X</span>
            </div>
          ) : (
            <div onClick={this.showMobileMenu} className="burger-icon-open">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </section>

        {this.state.visible ? (
          <nav className="mobile-menu">
            <ul>
              <li>
                <LocalizedLink to="/">Home</LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/innovazione">Innovazione</LocalizedLink>
              </li>
              <li>
                <LocalizedLink to="/il-progetto">Il progetto</LocalizedLink>
              </li>
             
              <li>
                <LocalizedLink to="/team">Team</LocalizedLink>
              </li>

              <li>
              <LocalizedLink to="/contatti">Contatti</LocalizedLink>
            </li>
             
            </ul>
          </nav>
        ) : (
          <p></p>
        )}

        <nav className="desktop-menu">
          <ul>
            <li>
              <LocalizedLink to="/">Home</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/innovazione">Innovazione</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/il-progetto">Il progetto</LocalizedLink>
            </li>
          
            <li>
              <LocalizedLink to="/team">Team</LocalizedLink>
            </li>

            <li>
              <LocalizedLink to="/contatti">Contatti</LocalizedLink>
            </li>
          
           
          </ul>
          <a href="https://www.facebook.com/vitinnovavitinnova/" target='_blank'><img src={fbIcon} style={{position: 'relative', top: '5px'}} alt=''/></a>
        </nav>
      </header>
    )
  }
}

export default Header
