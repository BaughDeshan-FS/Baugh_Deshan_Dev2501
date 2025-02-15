import React from "react";
import ButtonStandard from "./buttons/ButtonStandard";
import Icon from "./buttons/Icons";
import ImageUrl from "../images/ava2.png";

const Form = (props) => {
  return (
    <form style={styles.form} onSubmit={props.addName}>
      <div style={styles.inputContainer}>
        <input style={styles.input} placeholder="Create Post" />
        <div style={styles.innerForm}>
        <Icon IconImg={ImageUrl} ImageAlt="Alt tag" />
          <p>{props.pText}</p>
          <ButtonStandard btnText="Post" />
        </div>
      </div>
    </form>
  );
};

export default Form;

const styles = {
  form: {
    width: "90%",
    height: "20%",
    boxShadow: "1px 1px 1px 1px gray",
    background: "white",
    borderRadius: "5px",
    margin: "0 auto",
    marginTop: "3vh",
  },
  inputContainer: {
    width: "90%",
    testAlign: "center",
    margin: "0 auto",
    paddingTop: "1rem",
  },
  input: {
    testAlign: "center",
    padding: "1rem",
    width: "95%",
  },
  innerForm: {
    display: "flex",
    marginTop:'20px'
  },
};
