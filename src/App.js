import React from "react";
import { Paper } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Paper elevation={3}>
        {" "}
        <h2>{new Date().toLocaleTimeString()}</h2>
      </Paper>
    </div>
  );
}

export default App;
