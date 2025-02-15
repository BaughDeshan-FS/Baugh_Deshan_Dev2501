import React from "react";

const ButtonStandard = (props) => {
  return <button style={styles.buttonStandard}>{props.btnText}</button>;
};

export default ButtonStandard

const styles = {
    buttonStandard:{
        fontWeight: 'bold',
        padding: "2%",
        cursor: "pointer",
        margin:'0 auto',
        marginTop:'1rem',
        backgroundColor: "#7B93CC",
        borderRadius:'5px',
        minWidth:'20%',
    }
    

}