import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="nav" id="navbar">
        <nav className="nav__container">
          <div>
            <a href="#" className="nav__link nav__logo">
              <i className="bx bxl-deezer nav__icon logo"></i>
              <span className="nav__logo-name">Juicify</span>
            </a>

            <div className="nav__list">
              <div className="nav__items">
                <a href="#" className="nav__link active">
                  <i className="bx bx-home nav__icon"></i>
                  <span className="nav__name">Home</span>
                </a>
                <a href="#" className="nav__link">
                  <i className="bx bx-album nav__icon"></i>
                  <span className="nav__name">Browse</span>
                </a>
              </div>

              <div className="nav__items">
                <h3 className="nav__subtitle">My Music</h3>

                <div className="nav__dropdown">
                  <a href="#" className="nav__link">
                    <i className="bx bx-alarm nav__icon"></i>
                    <span className="nav__name">Recently Played</span>
                  </a>

                  {/* <div className="nav__dropdown-collapse"></div> */}
                </div>

                <a href="#" className="nav__link">
                  <i className="bx bx-file-blank nav__icon"></i>
                  <span className="nav__name">Local Files</span>
                </a>
                <a href="#" className="nav__link">
                  <i className="bx bx-bookmark nav__icon"></i>
                  <span className="nav__name">Saved</span>
                </a>
                <a href="#" className="nav__link">
                  <i className="bx bx-like nav__icon"></i>
                  <span className="nav__name">Likes</span>
                </a>
              </div>
            </div>
          </div>

          <a href="#" className="nav__link nav__logout">
            <i className="bx bx-log-out nav__icon"></i>
            <span className="nav__name">Log Out</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
