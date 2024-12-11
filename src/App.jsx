import { useState } from "react";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  const [bgColor, setBgColor] = useState("");
  const colorChange = (color) => {
    setBgColor(color);
  };

  return (


    <>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          padding: "100px",
          backgroundColor: bgColor,
          height: "100vh",
        }}
      >
        <h1 style={{color: bgColor === 'green' || bgColor === 'blue' || bgColor === 'red' ?'white':'black',fontFamily:"monospace" }}>Color Changer</h1>
        <br />
        <Button
          variant="contained"
          className="text-light fw-bolder mx-2  border-dark"
          style={{ width: "120px", height: "80px", backgroundColor: "red" , fontSize:"1.2rem",fontFamily:"monospace" }}
          onClick={() => colorChange("red")}
        >
          Red
        </Button>
        <Button
          variant="contained"
          className="text-dark fw-bolder mx-2  border-dark"
          style={{ width: "120px", height: "80px", backgroundColor: "yellow", fontSize:"1.2rem" ,fontFamily:"monospace" }}
          onClick={() => colorChange("yellow")}
        >
          Yellow
        </Button>
        <Button
          variant="contained"
          className="text-light fw-bolder mx-2  border-dark"
          style={{ width: "120px", height: "80px", backgroundColor: "blue" , fontSize:"1.2rem",fontFamily:"monospace" }}
          onClick={() => colorChange("blue")}
        >
          Blue
        </Button>
        <Button
          variant="contained"
          className="mx-2  border-dark text-dark fw-bolder"
          style={{ width: "120px", height: "80px", backgroundColor: "white" , fontSize:"1.2rem",fontFamily:"monospace" }}
          onClick={() => colorChange("white")}
        >
          White
        </Button>
        <Button
          variant="contained"
          className="text-light fw-bolder mx-2  border-dark"
          style={{ width: "120px", height: "80px", backgroundColor: "green" , fontSize:"1.2rem",fontFamily:"monospace" }}
          onClick={() => colorChange("green")}
        >
          Green
        </Button>
      </div>
    </>
  );
}

export default App;
