import React from "react";
import Icon from "./buttons/Icons";
import ImageUrl from "../images/ava2.png";
import { VscClose } from "react-icons/vsc";

const PostCard = (props) => {
  return (
    <div style={styles.postContainer}>
      <div style={styles.cardContent}>
        <div style={styles.postHeader}>
          <Icon IconImg={ImageUrl} IconAlt="Alt tag" />
          <p>{props.pAuthor}</p>
          <VscClose style={styles.deleteIcon}/>
        </div>
        <p>{props.pText}</p>
      </div>
    </div>
  );
};

export default PostCard;

const styles = {
  postContainer: {
    width: "90%",
    height: "40%",
    boxShadow: "1px 1px 1px 1px gray",
    background: "white",
    borderRadius: "5px",
    margin: "0 auto",
    marginTop: "3vh",
  },

  cardContent: {
    margin: "5%",
    
  },

  postHeader: {
    display: "flex",
    textAlign:'center',
  },

  deleteIcon:{
    marginLeft:'80%',
    cursor: "pointer",
  }
};
