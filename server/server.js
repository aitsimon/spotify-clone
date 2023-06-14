const express = require("express");
const cors = require("cors");
const axios = require("axios");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { json } = require("express");
const qs = require("qs");
const app = express();
require("dotenv").config({ path: "../.env" });
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const BASE_URL_REQUESTS = process.env.BASE_URL_REQUESTS;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
app.post("/token", async function (req, res, next) {
  var codigo = req.body.code;
  try {
    let stringAuth = CLIENT_ID + ":" + CLIENT_SECRET;
    let buff = Buffer.from(stringAuth).toString("base64");
    let dataAxios = {
      grant_type: "authorization_code",
      code: codigo,
      redirect_uri: REDIRECT_URI,
    };
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + buff,
      },
      data: qs.stringify(dataAxios),
      url: "https://accounts.spotify.com/api/token",
    };
    const response = await axios(options)
      .then((resp) => {
        let access_token = resp.data.access_token;
        let refresh_token = resp.data.refresh_token;
        res.json({ access_token: access_token, refresh_token: refresh_token });
      })
      .catch((error) => console.log(error));
  } catch (error) {
    res.json(false);
    next(err);
  }
});
app.post("/refresh-token", async function (req, res, next) {
  try {
    let stringAuth = CLIENT_ID + ":" + CLIENT_SECRET;
    let buff = Buffer.from(stringAuth).toString("base64");
    let dataAxios = {
      grant_type: "refresh_token",
      refresh_token: req.body.refresh_token,
    };
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + buff,
      },
      data: qs.stringify(dataAxios),
      url: "https://accounts.spotify.com/api/token",
    };
    const response = await axios(options)
      .then((resp) => {
        access_token = resp.data.access_token;
        res.json(true);
      })
      .catch((error) => console.log(error));
  } catch (errror) {
    next(err);
  }
});
app.post("/user-profile", async function (req, res, next) {
  try {
    const response = await axios({
      method: "GET",
      url: BASE_URL_REQUESTS + "me",
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/user-avaible-devices", async function (req, res, next) {
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}me/player/devices`,
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/transfer-playback", async function (req, res, next) {
  const url = "https://api.spotify.com/v1/me/player";
  const data = {
    device_ids: [req.body.device_ids],
    play: req.body.play,
  };
  const headers = {
    Authorization: `Bearer ${req.body.token}`,
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.put(url, data, {
      headers: headers,
    });
    console.log("Playback transferred successfully:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Failed to transfer playback:", error);
    console.log(error);
    res.status(500).send(error);
  }
});
app.post("/user-playlists", async function (req, res, next) {
  let limit = req.body.limit;
  let offset = req.body.offset;
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}me/playlists`,
      params: { limit: limit, offset: offset },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp.data);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/user-top-content", async function (req, res, next) {
  let type = req.body.type;
  let time_range = req.body.time_range;
  let limit = req.body.limit;
  console.log(req.body.token);
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}me/top/${type}`,
      params: { limit: limit, time_range: time_range },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/get-recently-played-tracks", async function (req, res, next) {
  let limit = req.body.limit;
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}me/player/recently-played`,
      params: { limit: limit },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/get-user-saved-tracks", async function (req, res, next) {
  let limit = req.body.limit;
  let offset = req.body.offset;
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}me/tracks`,
      params: { market: "ES", limit: limit, offset: offset },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/search-item", async function (req, res, next) {
  let query = req.body.query;
  let market = req.body.market;
  let offset = req.body.offset;
  let type = req.body.type;
  let limit = req.body.limit;
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}search`,
      params: {
        q: query,
        market: market,
        offset: offset,
        type: type,
        limit: limit,
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/get-track", async function (req, res, next) {
  let id = req.body.id;
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}tracks/${id}`,
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/save-tracks", async function (req, res, next) {
  let ids = req.body.ids;
  try {
    const response = await axios({
      method: "PUT",
      url: `${BASE_URL_REQUESTS}me/tracks`,
      params: {
        ids: ids,
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/delete-tracks", async function (req, res, next) {
  let ids = req.body.ids;
  try {
    const response = await axios({
      method: "DELETE",
      url: `${BASE_URL_REQUESTS}me/tracks`,
      params: {
        ids: ids,
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/check-user-saved-tracks", async function (req, res, next) {
  let ids = req.body.ids;
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}me/tracks/contains`,
      params: {
        ids: ids,
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/get-playlist", async function (req, res, next) {
  let id = req.body.id;
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}playlists/${id}`,
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/save-playlist", async function (req, res, next) {
  let playlist_id = req.body.playlist_id;
  try {
    const response = await axios({
      method: "PUT",
      url: `${BASE_URL_REQUESTS}playlists/${playlist_id}/followers`,
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/delete-playlist", async function (req, res, next) {
  let playlist_id = req.body.playlist_id;
  try {
    const response = await axios({
      method: "DELETE",
      url: `${BASE_URL_REQUESTS}playlists/${playlist_id}/followers`,
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/check-user-follows-playlist", async function (req, res, next) {
  let playlist_id = req.body.playlist_id;
  let id = req.body.id;
  console.log(id);
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}playlists/${playlist_id}/followers/contains`,
      params: {
        ids: id,
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/get-artist", async function (req, res, next) {
  let id = req.body.id;
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}artists/${id}`,
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/follow-artists", async function (req, res, next) {
  let ids = req.body.ids;
  try {
    const response = await axios({
      method: "PUT",
      url: `${BASE_URL_REQUESTS}me/following`,
      body: {
        type: "artist",
        ids: ids,
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/unfollow-artists", async function (req, res, next) {
  let ids = req.body.ids;
  try {
    const response = await axios({
      method: "DELETE",
      url: `${BASE_URL_REQUESTS}me/following`,
      body: {
        type: "artist",
        ids: ids,
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/check-user-follows-artists", async function (req, res, next) {
  let ids = req.body.ids;

  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}me/following/contains`,
      params: {
        type: "artist",
        ids: ids,
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/get-top-artist-tracks", async function (req, res, next) {
  let id = req.body.id;
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}artists/${id}/top-tracks`,
      params: {
        market: "ES",
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/get-album", async function (req, res, next) {
  let id = req.body.id;
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}albums/${id}`,
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/save-albums", async function (req, res, next) {
  let ids = req.body.ids;
  try {
    const response = await axios({
      method: "PUT",
      url: `${BASE_URL_REQUESTS}me/albums`,
      body: {
        ids: ids,
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/remove-albums", async function (req, res, next) {
  let ids = req.body.ids;
  try {
    const response = await axios({
      method: "DELETE",
      url: `${BASE_URL_REQUESTS}me/albums`,
      body: {
        ids: ids,
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/check-user-saved-albums", async function (req, res, next) {
  let ids = req.body.ids;

  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}me/albums/contains`,
      params: {
        ids: ids,
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/player-play-uri", async function (req, res, next) {
  const url = "https://api.spotify.com/v1/me/player/play";
  const data = {
    uris: [req.body.uris],
  };
  const headers = {
    Authorization: `Bearer ${req.body.token}`,
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.put(url, data, {
      headers: headers,
    });
    res.json(response.data);
  } catch (error) {
    console.error("Failed to play track:", error);
    res.status(500).send(error);
  }
});
app.post("/player-play-context-uri", async function (req, res, next) {
  const url = "https://api.spotify.com/v1/me/player/play";
  const data = {
    context_uri: req.body.context_uri,
  };
  const headers = {
    Authorization: `Bearer ${req.body.token}`,
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.put(url, data, {
      headers: headers,
    });
    res.json(response.data);
  } catch (error) {
    console.error("Failed to play track:", error);
    console.log(error);
    res.status(500).send(error);
  }
});
app.post("/get-user", async function (req, res, next) {
  let user_id = req.body.user_id;
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}users/${user_id}`,
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/get-avaible-genre-seeds", async function (req, res, next) {
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}recommendations/available-genre-seeds`,
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/get-recommendations", async function (req, res, next) {
  let seed_artists = req.body.seed_artists;
  let seed_genres = req.body.seed_genres;
  let seed_tracks = req.body.seed_tracks;
  let limit = req.body.limit;
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}recommendations`,
      params: {
        seed_artists: seed_artists,
        seed_genres: seed_genres,
        seed_tracks: seed_tracks,
        limit: limit,
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
app.post("/create-playlist", async function (req, res, next) {
  let name = req.body.name;
  let user_id = req.body.user_id;
  const url = `https://api.spotify.com/v1/users/${user_id}/playlists`;
  const data = { name: name };
  const headers = {
    Authorization: `Bearer ${req.body.token}`,
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.post(url, data, {
      headers: headers,
    });
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Failed to create playlist:", error);
    console.log(error);
    res.status(500).send(error);
  }
});
app.post("/add-items-playlist", async function (req, res, next) {
  const url = `https://api.spotify.com/v1/playlists/${req.body.playlist_id}/tracks`;
  const headers = {
    Authorization: `Bearer ${req.body.token}`,
    "Content-Type": "application/json",
  };
  let data = { uris: req.body.uris.split(",") };
  try {
    const response = await axios.post(url, data, {
      headers: headers,
    });
    res.json(response.data);
  } catch (error) {
    console.error("Failed to add tracks to playlist:", error);
    res.status(500).send(error);
  }
});
app.post("/get-featured-playlists", async function (req, res, next) {
  let limit = req.body.limit;
  let timestamp = req.body.timestamp;
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}browse/featured-playlists`,
      params: {
        limit: limit,
        country: "ES",
        locale: "es_ES",
        timestamp: timestamp,
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});
app.post("/get-new-releases", async function (req, res, next) {
  let limit = req.body.limit;
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL_REQUESTS}browse/new-releases`,
      params: {
        limit: limit,
        country: "ES",
      },
      headers: {
        Authorization: "Bearer " + req.body.token,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
        res.json(resp.data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500);
      });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});
app.listen(process.env.PORT, function () {
  console.log(`Server running on port ${process.env.PORT}`);
});
