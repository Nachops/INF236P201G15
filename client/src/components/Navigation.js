import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Citas de hoy
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/agenda">
            Agenda una hora
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/user">
            Perfil
          </Link>
        </li>
      </ul>
    );
  }
}
