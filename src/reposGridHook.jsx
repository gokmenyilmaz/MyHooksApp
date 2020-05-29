import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { fetchRepos } from "./api.js";
import Loading from "./Loading";

const ReposGridHook = (id) => {
  const [ repos, setRepos ] = React.useState([])
  const [ loading, setLoading ] = React.useState(true)


  useEffect(() => {
    setLoading(true)

    fetchRepos(id)
      .then((repos) => {
        setRepos(repos)
        setLoading(false)
      })
  }, [id])

  if (loading === true) {
    return <Loading />
  }

  if (loading === true) {
    return <Loading />;
  }



  return (
    <ul>
   
      {repos.map(({ name, handle, stars, url }) => (
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
};

export default ReposGridHook;
