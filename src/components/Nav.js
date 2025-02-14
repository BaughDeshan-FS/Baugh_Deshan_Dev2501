import React from "react";

const Nav = (props) => {
  return (
    <nav style={styles.navContainer}>
      <ul style={styles.list}>
        <li style={styles.listItem}>{props.liText1}</li>
        <li style={styles.listItem}>{props.liText2}</li>
        <li style={styles.listItem}>{props.liText3}</li>
      </ul>
    </nav>
  );
};

export default Nav;

const styles = {
  navContainer: {
    marginRight: "5px",
  },

  list: {
    listStyle: "none",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px",
    padding: "1rem",
    color: "#2e4482",
    cursor: "pointer",
  },

  listItem: {
    marginTop: "2rem",
  },
};
