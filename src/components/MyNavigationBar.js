import React, { useState } from 'react';
import '../css/index.css';

const MyNavigationBar = () => {
  let [x, setX] = useState("jeevan");

  const sideBar = () => {
    if (x === "jeevan") {
      document.querySelector("#real-nav").classList.add("active");
      document.querySelector(".hamburger").style.color = "white";
      document.querySelector(".hamburger").innerHTML = "&times;";

      setX("mrityu");
    } else {
      document.querySelector("#real-nav").classList.remove("active");
      document.querySelector(".hamburger").style.color = "black";
      document.querySelector(".hamburger").innerHTML = "&#9776;";
      setX("jeevan");
    }
  }


  document.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop >= 25) {
      document.querySelector("#nav1").style.backgroundColor = "black";
      document.querySelector("#nav1").style.color = "white";
    } else {
      document.querySelector("#nav1").style.backgroundColor = "white";
      document.querySelector("#nav1").style.color = "black";
    }
  })

  return (
    <>
      <p id="contact"> Contact us : 18001804500 </p>

      <div className="nav" id="nav1">
        <div className="hamburger" onClick={() => { sideBar() }}> &#9776; </div>

        {/* div child - 1 */}
        <div className="nav-child-1" >
          <h1> Priya Traders </h1>
        </div>

        {/* div child - 2 */}
        <div className="nav-child-2" id="real-nav">

          <div className="real-nav">
            <div><p> ratelist </p></div>
            <div><p> orders </p></div>
            <div><p> contact us </p></div>
            <div><p> about us </p></div>
            <div><p> privacy policy </p></div>
          </div>
        </div>
      </div>

      {/* Welcome Message just below the Navigation Bar */}
      <br />
      <div className="welcome">
        <p className="heading1"> Welcome to, </p>
        <div className="heading2"> <span> Priya Traders </span> <span>&nbsp; </span> <span className="about">A coca-cola Agency</span></div>
      </div>
    </>
  );
};

export default MyNavigationBar;