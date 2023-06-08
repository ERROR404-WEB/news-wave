import React, { Component } from "react";
// import { a } from 'react-router-dom';

export default class Navbar extends Component {
  render() {

    return (
      <div>

        <nav className="navbar fixed-top shadow-sm rounded navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsWave
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="mx-auto"></div>

              <ul className="navbar-nav mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Headlines</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/business">Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/entertainment">Entertainment</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/health">Health</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/science">Science</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sports">Sports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/technology">Technology</a>
                </li>
              </ul>
              <div className="form-check form-switch mx-3">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.ToggleMode}/>

              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
