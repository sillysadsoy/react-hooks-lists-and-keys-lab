import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkEls = links.map(link => <a href={link} key={link}>{link}</a>)
    console.log(linkEls)

  return <nav>{linkEls}</nav>;
}

export default NavBar;
