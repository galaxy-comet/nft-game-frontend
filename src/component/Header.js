import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { slide as SlideMenu } from "react-burger-menu";
import { Spin as Hamburger } from 'hamburger-react';


function Header() {
  const [mobile, setMobile] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [nav, setNav] = useState("none");
  useEffect(() => {
    const setResponsiveness = () => {
			return window.innerWidth < 1100
				? setMobile(true)
				: setMobile(false);
		};

		setResponsiveness();
		window.addEventListener("resize", () => setResponsiveness());
	});
  useEffect(() => {

  }, []);
  const menuhandle = () => { 
    if (nav === "block") {
      setNav("none");
    } else {
      setNav("block");
    }
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
                  <>
                    <div className="hamburger">
                      <section className="p-menu1">
                        <nav id="navbar" className="navigation" role="navigation">
                            <input id="toggle1" type="checkbox" />
                            <label className="hamburger1" for="toggle1">
                              <div className="top"></div>
                              <div className="meat"></div>
                              <div className="bottom"></div>
                            </label>
                            <nav className="menu1">
                              <Router>
                                <Link to="/">NFTs</Link>
                                <Link to="/">ROADMAP</Link>
                                <Link to="/">WHITEPAPER</Link>
                                <Link to="/">ABOUT</Link>
                                <Link to="/">FREEBIES</Link>
                                <Link to="/">JOIN&nbsp;DISCORD</Link>
                                <Link to="/">Twitter</Link>
                                <Link to="/">Instagram</Link>
                                <Link to="/">Discord</Link>
                              </Router>
                            </nav>
                        </nav>
                      </section>
                    </div>
                  </>
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