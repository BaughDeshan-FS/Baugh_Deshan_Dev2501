import React from "react";
import ButtonStandard from "../buttons/ButtonStandard";

const AdCards = (props) => {
  return (
    <article style={styles.Cards}>
      <p>{props.Text}</p>
      <img src={props.imageInsert} style={styles.image} alt={props.AdAlt} />
      <ButtonStandard btnText="Purchase here!" />
    </article>
  );
};

export default AdCards;

const styles = {
  Cards: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
    fontSize: "15px",
    marginRight: "3%",
    border: "2px solid",
    borderRadius: "5px",
  },
  image: {
    maxWidth: "60%",
    margin: "0 auto",
  },
};
