import React from "react";
import instagram_logo from "../Assets/Img/instagram_logo.png";
import facebook_logo from "../Assets/Img/facebook_logo.png";
import google_maps from "../Assets/Img/google_maps.png";

const Footer = () => {
  return (
    <footer>
      <a href="https://instagram.com/diariodeunaporcion?utm_medium=copy_link">
        <img src={instagram_logo} alt="instagram_logo" width="40" height="35" />
      </a>
      <a href="https://goo.gl/maps/gHgP9qhkgSUxZKaCA">
        <img src={google_maps} alt="google_maps" width="40" height="35" />
      </a>
      <a href="https://www.facebook.com/diariodeunaporcion/">
        <img src={facebook_logo} alt="facebook_logo" width="40" height="35" />
      </a>
    </footer>
  );
};

export default Footer;
