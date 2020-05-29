import React from "react";
import ReactDOM from "react-dom";
import { fetchRepos } from "./api.js";
import Loading from "./Loading";
import ReposGridHook from "./reposGrid"

const rootElement = document.getElementById("root");
ReactDOM.render(<ReposGridHook />, rootElement);
