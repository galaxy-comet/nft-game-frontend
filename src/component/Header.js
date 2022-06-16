import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react';
import Menu from './Menu';

function Header() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const setResponsiveness = () => {
			return window.innerWidth < 1100
				? setMobile(true)
				: setMobile(false);
		};

		setResponsiveness();
		window.addEventListener("resize", () => setResponsiveness());
	});
  const[open,setOpen]=useState(true)
  const changeOpen=()=>{
    setOpen(!open)
  }
  return (
    <>
      <div className="header">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={5} md={5} sm={5} lg={5}>
              <div className="header_logo">
                <div>
                  <img src={logo} />
                </div>
                &nbsp;&nbsp;
                <h2 className="logo_title">THE&nbsp;ASSEMBLY</h2>
              </div>
            </Grid>
            <Grid item xs={11} md={11} sm={11} lg={11}>
              {
                mobile ? 
                  <div className="navbar">
                      <div className='hamburger' onClick={changeOpen}>
                        <Hamburger size={25} color="white"/>
                      </div>
                      {open?
                        null:<Menu/>
                      }         
                  </div>
                :
                <div className="header_menu">
                  <Router>
                    <Link to="/">NFTs</Link>
                    <Link to="/">ROADMAP</Link>
                    <Link to="/">WHITEPAPER</Link>
                    <Link to="/">ABOUT</Link>
                    <Link to="/">FREEBIES</Link>
                    <Link to="/">MARKETPLACES</Link>
                  </Router>
                  <div className="button-group">
                    <button>JOIN&nbsp;DISCORD</button>
                    <button className="social-btn">
                      <BsTwitter />
                    </button>
                    <button className="social-btn">
                      <BsInstagram />
                    </button>
                    <button className="social-btn">
                      <SiDiscord />
                    </button>
                  </div>
                </div>
              }
            </Grid>
          </Grid>
        </Box>
      </div>
      
    </>
  );
}
export default Header;