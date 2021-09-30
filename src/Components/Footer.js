import React from "react";
import logo from "../Assets/images/logoBlue.png";

function Footer() {
  return (
    <footer className="container my-3 text-muted text-end text-small">
      <img
        src={logo}
        alt="kashu logo"
        className="img-fluid my-2"
        width="50px"
      />
      <p className="mb-1">© 2021 Kashú</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="#">Términos y condiciones</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Política de privacidad</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Apoya a Kashú</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
