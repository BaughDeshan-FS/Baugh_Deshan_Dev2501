import React from "react";
import Icon from "./buttons/Icons";
import ImageUrl from "../images/ava2.png";
import LogoImg from "../images/crescent-moon-logo.png";
import Logo from "./buttons/Logo";
import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";

const Header = (props) => {
  return (
    <header style={styles.Header}>
      <div style={styles.left}>
        <div styles={styles.logo}>
          <Logo LogoImg={LogoImg} LogoAlt="Alt tag" />
        </div>
        <h1>SleepyBook</h1>
      </div>
      <div style={styles.searchCont}>
        <span style={styles.inputIcon}>
          <FaSearch />
        </span>
        <input type="text" style={styles.inputWithIcon} placeholder="Search" />
      </div>
      <div style={styles.rightSide}>
        <button style={styles.rightIcons}>
          <FaEnvelope />
        </button>
        <button style={styles.rightIcons}>
          <FaBell />
        </button>
        <Icon IconImg={ImageUrl} ImageAlt="Alt tag" />
      </div>
    </header>
  );
};

export default Header;

const styles = {
  Header: {
    padding: "1%",
    backgroundColor: "#2e4482",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "1px 6px 1px 1px yellow",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  searchCont: {
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "row",
    borderRadius: "2px",
    width: "40%",
  },
  inputIcon: {
    background: "#ddd",
    padding: "10px",
    flexDirection: "row",
    borderRadius: "2px",
    alignItems: "center",
    fontSize: "1rem",
    cursor: "pointer",
  },
  inputWithIcon: {
    border: "none",
    flex: 1,
    padding: "10px",
  },
  rightSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "4%",
  },
  rightIcons: {
    backgroundColor: "#2e4482",
    border: "none",
    fontSize: "50px",
    height: "50px",
    width: "60px",
    alignItems: "center",
    cursor: "pointer",
    marginRight: "10px",
  },
};
