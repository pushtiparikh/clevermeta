import {
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";

import home from "../../../../../assets/images/nft/index1.png";

import logo from "../../../../../assets/images/mint-logo.png";
import openseaIcon from "../../../../../assets/images/icon/opensea.svg";
import mediumIcon from "../../../../../assets/images/icon/med.svg";
import hoverShape from "../../../../../assets/images/icon/hov_shape_s.svg";
import mailIcon from "../../../../../assets/images/icon/mail_icon.svg";
import IconClose from "../../../../../assets/images/icon/mint-menu_x_icon..svg";

import NavigationWrapper from "./Navigation.style";
import Button from "../../../../../common/button";

const Navigation = ({ mobileMenuHandle }) => {

  return (
    <NavigationWrapper>
      <div className="container">
        <div className="navigation_header">
          <img src={logo} alt="logo" />
          <h2 className="menu_title">Menu</h2>

          <div className="close_btn">
            <Button sm variant="outline" onClick={() => mobileMenuHandle()}>
              <img src={IconClose} alt="icon" />
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="navigation_left">
              <div className="menu_widgets">
                <h3>HOME</h3>
                <div className="home_pages">
                  <a href="/">
                    {" "}
                    <img src={home} alt="icon" />{" "}
                  </a> 
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="navigation_right">
              <div className="menu_widgets">
                <h3>Other Navigation</h3>

                <div className="pages_list">
                  <a href="/mint-1"> Minting Page </a>
                  <a href="/collections"> Collections </a>
                  <a href="/coming-soon"> Coming Soon </a>
                  <a href="/post"> Blog </a>
                  <a href="/about"> About Us </a>
                  <a href="/roadmap"> Roadmap </a>
                  <a href="/faq"> FAQs </a>
                  <a href="contact"> Contact Us </a>
                </div>
              </div>
              <div className="menu_widgets">
                <h3>JOIN WITH US</h3>

                <div className="social_links">
                  <a href="# ">
                    <img src={openseaIcon} alt="icon" />
                    <span className="hover_shape">
                      <img src={hoverShape} alt="shape" />
                    </span>
                  </a>
                  <a href="# ">
                    <FaLinkedinIn />
                    <span className="hover_shape">
                      <img src={hoverShape} alt="shape" />
                    </span>
                  </a>
                  <a href="# ">
                    <FaInstagram />
                    <span className="hover_shape">
                      <img src={hoverShape} alt="shape" />
                    </span>
                  </a>
                  <a href="# ">
                    <FaTelegramPlane />
                    <span className="hover_shape">
                      <img src={hoverShape} alt="shape" />
                    </span>
                  </a>
                  <a href="# ">
                    <FaFacebook />
                    <span className="hover_shape">
                      <img src={hoverShape} alt="shape" />
                    </span>
                  </a>
                  <a href="# ">
                    <img src={mediumIcon} alt="icon" />
                    <span className="hover_shape">
                      <img src={hoverShape} alt="shape" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="menu_widgets contact_address">
                <h3>
                  {" "}
                  <img src={mailIcon} alt="icon" /> MAIL US
                </h3>
                <p>Info: ask@CleverMeta.com</p>
                <p>Support: help@CleverMeta.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default Navigation;
