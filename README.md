# ReSpoted a Spotify Clone in a PWA

## Project Description

This project is a Spotify clone that allows users to create an account, search for songs, and create playlists. Users can also follow other users and view their playlists. This project was created using Vue, Quasar, and Node.js as the main technologies.

It's my first major project created on Vue, so feel free to give me any feedback on how I can improve my code. I hope it can be useful to anyone who wants to learn Vue or Quasar. I also hope it can be useful to anyone who wants to learn how to use the Spotify Web API. I've tried to make the code as readable as possible, but if you have any questions, feel free to ask. I'll try to answer them as best as I can.

Currently the project is deployed here: https://respoted.onrender.com/. However, Spotify Developer limitations don't allow everybody to use it. In order to try it I have to add your email in my Spotify Developer Dashboard. Feel free to ping me to join.

https://github.com/aitsimon/spotify-clone/assets/98778142/7ed1fb7b-2719-41be-b9a6-3812ff8d326d



## Technologies Used

- [Vue](https://vuejs.org/)
- [Quasar](https://quasar.dev/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Pinia](https://pinia.esm.dev/)
- [Axios](https://axios-http.com/)
- [Vue Router](https://router.vuejs.org/)
- [Sass](https://sass-lang.com/)
- [Flicking](https://github.com/naver/egjs-flicking)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [Spotify Web Playback SDK](https://developer.spotify.com/documentation/web-playback-sdk/)
- HTML5
- CSS3
- JavaScript (ES6)

## Features

- Users can login with their Spotify account via OAuth 2.0
- Users can search for songs
- Users can create playlists via recomendations
- Users can like songs, playlists, albums, and artists
- Users can view other users' playlists
- Users can view their followers and profile information
- Users can view their recently played songs
- Users can view their top artists and tracks
- Users can view their saved songs, albums, and artists (whole library)
- Users can view their playlists
- Users can view their followed artists
- Users can view their followed users
- Premium Spotify users can play songs, albums, and playlists and all the features that come with the Spotify Web Playback SDK
- Users can download the web app as a PWA
- Users can choose between light and dark mode

## Installation and Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed on your machine. Version 14.17.0 or higher is recommended.
- [Spotify Developer Account](https://developer.spotify.com/dashboard/) create a project to get your client ID and client secret. You will also need to add the redirect URI to your app settings. The redirect URI should be `http://localhost:9000/callback` for development. You can change the port number.
- [Spotify Premium Account](https://www.spotify.com/us/premium/) to use the Spotify Web Playback SDK.
- [Quasar CLI](https://quasar.dev/quasar-cli/installation) installed globally on your machine. Version 3.0.0 or higher is recommended.
- [Vue CLI](https://cli.vuejs.org/guide/installation.html) installed globally on your machine. Version 4.5.13 or higher is recommended.

### Installation

1. Clone the repository
2. Navigate to the `respoted` folder
3. Run `npm install` to install the dependencies
4. Create a `.env` file in the root directory. Add the following environment variables:

```
BASE_URL_REQUEST = "https://accounts.spotify.com/api" (Spotify API URL, can be changed by Spotify in the future)
CLIENT_ID = "your_client_id" (Spotify client ID)
CLIENT_SECRET ="your_client_secret" (Spotify client secret)
REDIRECT_URI = "http://localhost:9000/callback" (Spotify redirect URI, can be changed if you use a different port or domain)
SERVER_URL = "http://localhost:3001" (Server URL, can be changed if you use a different port or domain)
PORT = "3001" (Server port, can be changed)
```

5. Run `npm run dev` to start both the server and the client
6. Navigate to `http://localhost:9000/callback` to view the app

## Notes

- If you don't own Spotify Premium, you can still use the app, but you won't be able to play songs.
- If you don't own Spotify Developer Extended Quota for your project, you must register the emails of the users in the dashboard to use the app. Otherwise, you will get a 429 error.
