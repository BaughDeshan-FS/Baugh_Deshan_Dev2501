import React, { Component } from "react";
import AdCards from "./components/AdCard";
import Form from "./components/Form";
import Header from "./components/Header";
import Nav from "./components/Nav";
import PostCard from "./components/PostCard";
import image1 from "./images/trash.webp";
import image2 from "./images/Adware.png";
import image3 from "./images/Blog-Image-Facebook-Marketplace-for-Dealersips.jpg";
// import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={styles.container}>
          <div style={styles.leftSide}>
            <Nav
              liText1="News Feed"
              liText2="Messages"
              liText3="Trending Stories"
            />
          </div>
          <main style={styles.main}>
            <Form pText="What was your dream?" />
            <PostCard
              pAuthor="Deshan"
              pText="I dreamt I was merely half my current height and had to carry an evil ring to a volcano. I woke up after getting stabbed by a cave troll...I never made it to the volcano."
            />
          </main>
          <aside style={styles.ads}>
            <AdCards Text="Bunch of crap you dont need!" imageInsert={image1} />
            <AdCards
              Text="Clicking here definitely wont give you a virus!"
              imageInsert={image2}
            />
            <AdCards
              Text="Enticing product that is actually a scam!"
              imageInsert={image3}
            />
          </aside>
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    background: "WhiteSmoke",
    color: "",
    height: "100vh",
  },
  "@media(min-width: 1024px)": {
    button: {
      fontSize: 16,
    },
  },
  leftSide: {
    width: "20%",
  },

  main: {
    display: "flex",
    flexDirection: "column",
    width: "55%",
    background: "#ECD778",
  },
  ads: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    width: "25%",
  },
  avatar: {
    padding: "2%",
  },
  logo: {
    width: "50px",
    height: "50px",
  },
};
