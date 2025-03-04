import React from 'react';
import ButtonLink from './buttonLink';
import history from '../services/history';

export default function navbarClient() {

  const submitHandler = e => {
    localStorage.clear();
    history.push('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg background-navbar">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand text-light" href="#">ServeRest</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <ButtonLink dataTestId="home" text="Home" route="/admin/home" />
          </li>
        </ul>
        <form onClick={ submitHandler }>
          <button class=" my-2 my-sm-0 btn btn-info" type="button">Logout</button>
        </form>
      </div>
    </nav>
  );
}
