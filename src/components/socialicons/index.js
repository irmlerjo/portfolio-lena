import React, { useState } from "react";

import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";
import { Link } from "react-router-dom";


export const Socialicons = (params) => {
  const [po_state,setPostate] = useState('my-2 marked');
  const [co_state,setCostate] = useState('');
  const [abt_state,setAbtstate] = useState('');

  const handleToggle = (event) => {
    setCostate('')
    setAbtstate('')
    setPostate('')
    if(event.target.name=="home"||event.target.name=="portfolio"){
      setPostate('my-2 marked')
    }
    if(event.target.name=="contact"){
      setCostate('my-2 marked')      
    }
    if(event.target.name=="about"){
      setAbtstate('my-2 marked')
    }
    
  };

  // const handleClick = () => {
  //   clicked ? setClicked('') : setClicked('base-state click-state');
  // };
  return (
    <div className="menu__container">
      <ul className="the_menu">
        <li className="menu_item">
          <Link onClick={handleToggle} to="/" name="home"
            className="link_lena marked">lena irmler</Link>
        </li>
        <li className="menu_item">
          <Link onClick={handleToggle} to="/portfolio" className={po_state || 'my-2'} name="portfolio" >projects</Link>
        </li>
        <li className="menu_item">
          <Link onClick={handleToggle} to="/about" className={abt_state || 'my-2'} name="about" >about</Link>
        </li>
        <li className="menu_item">
          <Link onClick={handleToggle} to="/contact" className={co_state || 'my-2'} name="contact" >contact</Link>
        </li>
      </ul>
    </div>
  );
};
