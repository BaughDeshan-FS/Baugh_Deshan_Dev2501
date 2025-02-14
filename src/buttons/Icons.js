import React from "react";

const Icon = (props) => {
  return (
    <img src={props.IconImg} alt={props.IconAlt} style={styles.Icon} />
  );
};

export default Icon;

const styles = {
  Icon: {
    height:'60px',
    border: '3px solid white',
    borderRadius:'50%',
    cursor: "pointer",
  },
};