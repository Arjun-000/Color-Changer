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
        <h1>Color Changer</h1>
        <br />
        <Button
          variant="outlined"
          className="text-dark fw-bolder mx-2  border-dark"
          style={{ width: "120px", height: "80px", backgroundColor: "red" }}
          onClick={() => colorChange("red")}
        >
          Red
        </Button>
        <Button
          variant="outlined"
          className="text-dark fw-bolder mx-2  border-dark"
          style={{ width: "120px", height: "80px", backgroundColor: "yellow" }}
          onClick={() => colorChange("yellow")}
        >
          Yellow
        </Button>
        <Button
          variant="outlined"
          className="text-light fw-bolder mx-2  border-dark"
          style={{ width: "120px", height: "80px", backgroundColor: "blue" }}
          onClick={() => colorChange("blue")}
        >
          Blue
        </Button>
        <Button
          variant="outlined"
          className="mx-2  border-dark text-dark fw-bolder"
          style={{ width: "120px", height: "80px", backgroundColor: "white" }}
          onClick={() => colorChange("white")}
        >
          White
        </Button>
        <Button
          variant="outlined"
          className="text-light fw-bolder mx-2  border-dark"
          style={{ width: "120px", height: "80px", backgroundColor: "green" }}
          onClick={() => colorChange("green")}
        >
          Green
        </Button>
      </div>
    </>
  );
}

export default App;
