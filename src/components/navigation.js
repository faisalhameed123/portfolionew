import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavComponent = (prop) => {
  const scrollEffectDeveloper = () => {
    var myRef = document.getElementById("developerContainer");
    myRef.scrollIntoView();
  };
  const scrollEffectAbout = () => {
    var myRef = document.getElementById("aboutContainer");
    myRef.scrollIntoView();
  };
  const scrollEffectSkills = () => {
    var myRef = document.getElementById("skillsContainer");
    myRef.scrollIntoView();
    htmlBar();
    cssBar();
    JavaBar();
    ReactBar();
    xdBar();
    photoBar();
  };
  const scrollEffectProjects = () => {
    var myRef = document.getElementById("projectContainer");
    myRef.scrollIntoView();
  };
  const scrollEffectContact = () => {
    var myRef = document.getElementById("contactContainer");
    myRef.scrollIntoView();
  };

  var i1 = 0;
  var i2 = 0;
  var i3 = 0;
  var i4 = 0;
  var i5 = 0;
  var i6 = 0;
  function htmlBar() {
    if (i1 === 0) {
      i1 = 1;
      var elem = document.getElementById("htmlBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 85) {
          clearInterval(id);
          i1 = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
        }
      }
    }
  }
  function cssBar() {
    if (i2 === 0) {
      i2 = 1;
      var elem = document.getElementById("cssBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 80) {
          clearInterval(id);
          i2 = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
        }
      }
    }
  }
  function JavaBar() {
    if (i3 === 0) {
      i3 = 1;
      var elem = document.getElementById("javaBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 70) {
          clearInterval(id);
          i3 = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
        }
      }
    }
  }
  function ReactBar() {
    if (i4 === 0) {
      i4 = 1;
      var elem = document.getElementById("reactBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 70) {
          clearInterval(id);
          i4 = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
        }
      }
    }
  }
  function xdBar() {
    if (i5 === 0) {
      i5 = 1;
      var elem = document.getElementById("xdBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 75) {
          clearInterval(id);
          i5 = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
        }
      }
    }
  }
  function photoBar() {
    if (i6 === 0) {
      i6 = 1;
      var elem = document.getElementById("photoBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 75) {
          clearInterval(id);
          i6 = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
        }
      }
    }
  }

  const [sliderDown, setSliderDown] = useState(true);

  function slideDown() {
    if (sliderDown) {
      document.querySelector(".header").style.marginTop = "300px";
      setSliderDown(false);
      return;
    } else {
      document.querySelector(".header").style.marginTop = "0";
      setSliderDown(true);
    }
  }
  return (
    <nav
      className="[ navbar navbar-default navbar-fixed-top ]"
      style={{ background: "black", border: "none" }}
    >
      <div className="[ navbar-header navbar-left ]">
        <button
          type="button"
          className="[ navbar-toggle collapsed ]"
          onClick={slideDown}
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      <div
        className="[ collapse navbar-collapse ]"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="[ nav navbar-expand-lg navbar-nav navbar-right ] ">
          <li className="animated zoomIn">
            <Link onClick={scrollEffectDeveloper} to="/#home">
              Home
            </Link>
          </li>
          <li className="animated zoomIn">
            <Link onClick={scrollEffectAbout} to="/#about">
              About
            </Link>
          </li>
          <li className="animated zoomIn">
            <Link onClick={scrollEffectSkills} to="/#skills">
              Skills
            </Link>
          </li>
          <li className="animated zoomIn">
            <Link onClick={scrollEffectProjects} to="/#portfolio">
              Portfolio
            </Link>
          </li>
          <li className="animated zoomIn">
            <Link onClick={scrollEffectContact} to="/#contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavComponent;
