import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div class="nav" id="navbar">
        <nav class="nav__container">
          <div>
            <a href="#" class="nav__link nav__logo">
              <i class="bx bxl-deezer nav__icon logo"></i>
              <span class="nav__logo-name">Juicify</span>
            </a>

            <div class="nav__list">
              <div class="nav__items">
                <a href="#" class="nav__link active">
                  <i class="bx bx-home nav__icon"></i>
                  <span class="nav__name">Home</span>
                </a>
                <a href="#" class="nav__link">
                  <i class="bx bx-album nav__icon"></i>
                  <span class="nav__name">Browse</span>
                </a>
              </div>

              <div class="nav__items">
                <h3 class="nav__subtitle">My Music</h3>

                <div class="nav__dropdown">
                  <a href="#" class="nav__link">
                    <i class="bx bx-alarm nav__icon"></i>
                    <span class="nav__name">Recently Played</span>
                  </a>

                  {/* <div class="nav__dropdown-collapse"></div> */}
                </div>

                <a href="#" class="nav__link">
                  <i class="bx bx-file-blank nav__icon"></i>
                  <span class="nav__name">Local Files</span>
                </a>
                <a href="#" class="nav__link">
                  <i class="bx bx-bookmark nav__icon"></i>
                  <span class="nav__name">Saved</span>
                </a>
                <a href="#" class="nav__link">
                  <i class="bx bx-like nav__icon"></i>
                  <span class="nav__name">Likes</span>
                </a>
              </div>
            </div>
          </div>

          <a href="#" class="nav__link nav__logout">
            <i class="bx bx-log-out nav__icon"></i>
            <span class="nav__name">Log Out</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
