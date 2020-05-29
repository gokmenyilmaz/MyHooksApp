import React from "react";
import ReactDOM from "react-dom";
import { fetchRepos } from "./api.js";
import Loading from "./Loading";
import ReposGrid from "./reposGrid"

const rootElement = document.getElementById("root");
ReactDOM.render(<ReposGrid />, rootElement);
