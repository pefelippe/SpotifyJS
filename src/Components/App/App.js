import React, { useEffect, useState } from "react";

import Player from "../Player/Player";

import Login from "../Login/Login";

import SpotifyWebApi from "spotify-web-api-js";

import { getTokenFromUrl } from "../../spotify";

import "./App.css";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("person", user);
      });
    }
  }, []);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player />}
    </div>
  );
}

export default App;
