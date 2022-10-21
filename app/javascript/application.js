// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createRoot } from "react-dom/client";

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);