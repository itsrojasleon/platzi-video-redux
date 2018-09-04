import React, { Component } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import { WithRouter } from 'react-router';
import logo from '../../../images/logo.png';

class Header extends Component {
  handleClick = () => {
    this.props.history.goBack();
  }
  render() {
    return (
      <header className="Header">
        <img src={logo} width={250}/>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="is-selected">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/videos" activeClassName="is-selected">
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink to="/v">
                Redirect
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="is-selected">
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="is-selected">
                Perfil
              </NavLink>
            </li>
            <li>
              <a onClick={this.handleClick}>👈</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default WithRouter(Header)