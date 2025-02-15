import React from "react";

const Logo = (props) => {
  return (
    <img src={props.LogoImg} alt={props.LogoAlt} style={styles.logo} />
  );
};

export default Logo;

const styles = {
  logo: {
    height:'60px',
    border: '3px solid white',
    borderRadius:'50%',
    cursor: "pointer",
  },
};