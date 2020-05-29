import React from "react";
import ReactDOM from "react-dom";
import { fetchRepos } from "./api.js";
import Loading from "./Loading";

class ReposGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      loading: true
    };

    this.updateRepos = this.updateRepos.bind(this);
  }
  componentDidMount() {
    this.updateRepos(this.props.id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.updateRepos(this.props.id);
    }
  }
  updateRepos(id) {
    this.setState({ loading: true });

    fetchRepos(id).then(repos =>
      this.setState({
        repos,
        loading: false
      })
    );
  }
  render() {
    if (this.state.loading === true) {
      return <Loading />;
    }

    return (
      <ul>
        {this.state.repos.map(({ name, handle, stars, url }) => (
          <li key={name}>
            <ul>
              <li>
                <a href={url}>{name}</a>
              </li>
              <li>@{handle}</li>
              <li>{stars} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ReposGrid />, rootElement);
