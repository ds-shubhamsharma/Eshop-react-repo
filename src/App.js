import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes/Navigation";
import "../src/assets/css/util.css";
import "../src/assets/css/main.css";
import "../src/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../src/assets/vendor/bootstrap/css/bootstrap-grid.css";
import "../src/assets/vendor/bootstrap/css/bootstrap-grid.css.map";
import "../src/assets/vendor/bootstrap/css/bootstrap-grid.min.css";
import "../src/assets/vendor/bootstrap/css/bootstrap-reboot.css";
import "../src/assets/vendor/bootstrap/css/bootstrap-reboot.css.map";
import "../src/assets/vendor/bootstrap/css/bootstrap-reboot.min.css";
import "../src/assets/vendor/bootstrap/css/bootstrap-reboot.min.css.map";
import "../src/assets/vendor/bootstrap/css/bootstrap.css";
import "../src/assets/vendor/bootstrap/css/bootstrap.css.map";
import "../src/assets/vendor/bootstrap/css/bootstrap.min.css.map";
import "../src/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../src/assets/fonts/iconic/css/material-design-iconic-font.min.css";
import "../src/assets/fonts/linearicons-v1.0.0/icon-font.min.css";
import "../src/assets/vendor/animate/animate.css";
import "../src/assets/fonts/iconic/css/material-design-iconic-font.css"
import "../src/assets/fonts/iconic/css/material-design-iconic-font.min.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
