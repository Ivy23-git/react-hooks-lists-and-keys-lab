import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    <ul>
<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#projects">Projects</a></li>
</ul>
    }</nav>;
}

export default NavBar;
