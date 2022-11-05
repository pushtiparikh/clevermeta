import { useModal } from "../../../../utils/ModalContext";
import { useEffect, useState } from "react";
import { FaDiscord, FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "../../../../common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "../../../../assets/images/logo.png";
import { isMetaMaskInstalled } from '../../../../config';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  const { 
    walletModalHandle, 
    metamaskModalHandle, 
    account, 
    isWalletAlreadyConnected, 
    disconnectWalletFromApp } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  const substr = (str, n) =>{
    return str.length > n ? str.substr(0, n -1) : str;
  }

  const handleWalletConnect = async () =>{
    if(!isMetaMaskInstalled()){
      metamaskModalHandle();
    }else{
      walletModalHandle();
    }
  }
  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  useEffect(() => {
    isWalletAlreadyConnected();
  },[isWalletAlreadyConnected]);

  return (
    <NavWrapper className="CleverMeta_header" id="navbar">
      <div className="container">
        {/* Main Menu Start */}
        <div className="CleverMeta_menu_sect">
          <div className="CleverMeta_menu_left_sect">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="CleverMeta nft logo" />
              </a>
            </div>
          </div>
          <div className="CleverMeta_menu_right_sect CleverMeta_v1_menu_right_sect">
            <div className="CleverMeta_menu_list">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/mint-1">Minting</a>
                </li>
                <li>
                  <a href="/collections">Collection</a>
                </li>
                <li>
                  <a href="/coming-soon">Next Drop</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li className="submenu">
                    <a href="# ">Other +</a>
                    <div className="sub_menu_sect">
                      <ul className="sub_menu_list">
                        <li>
                          <a href="/about">About Us </a>
                        </li>
                        <li>
                          <a href="/roadmap">Roadmap</a>
                        </li>
                        <li>
                          <a href="/faq"> FAQs </a>
                        </li>
                        <li>
                          <a href="/blogs">Latest Blog</a>
                        </li>
                      </ul>
                    </div>
                  </li>
              </ul>
            </div>
            <div className="CleverMeta_menu_btns">
              <button className="menu_btn" onClick={() => handleMobileMenu()}>
                <MdNotes />
              </button>
              <Button sm variant="outline" className="join_btn">
                <FaDiscord /> Join
              </Button>
              { account ?
              <Dropdown>
                <Dropdown.Toggle variant="white" id="dropdown-basic" className="connect_btn">
                  { substr(account.toString(), 15) }
                </Dropdown.Toggle>
          
                <Dropdown.Menu>
                  <Dropdown.Item href="# " onClick={() => disconnectWalletFromApp() }>Disconnect</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              :
              <Button
                sm
                variant="hovered"
                className="connect_btn"
                onClick={() => handleWalletConnect()}
              >
                <FaWallet />
                Connect
              </Button>

              }
            </div>
          </div>
        </div>
        {/* <!-- Main Menu END --> */}
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;
