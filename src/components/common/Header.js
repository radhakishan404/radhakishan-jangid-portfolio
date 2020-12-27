import React, { Fragment } from "react";
import "../css/Header.scss";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <Fragment>
            <header className="header-nav">
                <div className="header-nav-wrapper">
                    <nav className="header-nav-menu" aria-label="Main">
                        <ul>
                            <li>
                                <Link aria-current="page" className="active" to={"/"}>
                                    <span className="menu-item-title text-gradient">Home</span>
                                    <span>Introduction about me</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/about"}>
                                    <span className="menu-item-title text-gradient">About</span>
                                    <span>Professional skills and experience</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/portfolio"}>
                                    <span className="menu-item-title text-gradient">Portfolio</span>
                                    <span>Some of the projects I worked on</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>
                                    <span className="menu-item-title text-gradient">Contact</span>
                                    <span>Get in touch, I will buy the coffee</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <header className="site-header">
                <div className="header-inner container-wide">
                    <div className="site-logo">
                        <Link to={"/"}>
                            <h2 className="logo-icon">R</h2>
                        </Link>
                    </div>
                    <div className="site-header-burger">
                        <div className="ml-3 burger js-menu-trigger">
                            <span className="closed"><img src={"https://githubuniverse.com/assets/img/svgs/burger.svg"} alt="menu icon" /></span>
                            <span className="open"><img src={"https://githubuniverse.com/assets/img/svgs/close.svg"} alt="close icon" /></span>
                        </div>
                    </div>
                </div>
                <nav className="mobile-drawer">
                    <div className="navigation-inner">
                        <ul className="mobile-navigation">
                            <li className="watch-sub-nav home">
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className="watch-sub-nav portfolio">
                                <Link to={"/portfolio"}>
                                    <span>Portfolio</span>
                                </Link>
                            </li>
                            <li className="watch-sub-nav service">
                                <Link to={"/services"}>
                                    <span>Services</span>
                                </Link>
                            </li>
                            <li className="watch-sub-nav about">
                                <Link to={"/about"}>
                                    <span>About</span>
                                </Link>
                            </li>
                            <li className="contact">
                                <Link to={"/contact"}>
                                    <span>Say Hello</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header >

            <div id="nav_bar">
                <Link className="logo" to={"/"}>
                    <img src="https://raw.githubusercontent.com/radhakishan404/radhakishan-jangid-portfolio/master/src/images/1000%20X%201000.png" alt="Wordpress Developer Logo, Web Developer Logo , Front End Developer Logo" />
                </Link>

                <nav className="en">
                    <button type="button" class="header__nav-btn " aria-label="Toggle main navigation" aria-haspopup="true" aria-expanded="false">
                        <span class="header__nav-btn-icon">
                            <span class="span-1"></span>
                            <span class="span-2"></span>
                            <span class="span-3"></span>
                        </span>
                    </button>
                </nav>

                <div>

                </div>
            </div>
        </Fragment >
    )
}

export default Header;