import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "../src/router/Router";
import "antd/dist/antd.min.css";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import "bootstrap/dist/css/bootstrap.min.css";
Amplify.configure(config);

ReactDOM.render(<Router />, document.getElementById("root"));
