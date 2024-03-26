import React from "react";
import { Link } from "react-router-dom";
import '../Home.css'

const Home = () => {
  const linkStyle = {
    color: "white",
    fontFamily: "revert-layer",
    fontSize: "20px",
    textDecoration: "none",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
        <h3>Open AI Integration using GPT- 3.5 Turbo</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={"/task_summarizer"} style={linkStyle}>
          Task Summarizer
        </Link>
        <Link to={"/language_tanslator"} style={linkStyle}>
          Language Translator
        </Link>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home;
