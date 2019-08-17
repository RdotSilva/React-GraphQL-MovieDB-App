# React GraphQL MovieDB App

MovieDB app that uses the TMDB API to pull and display movie data.

### Prerequisites

You must sign up for an account and request a personal API key.

```
https://www.themoviedb.org/settings/api
```

### Getting your API key and entering it in the script.

1. Sign up and goto your account settings page:

```
https://www.themoviedb.org/settings/api?language=en-US
```

2. Click "API" tab on the left.

3) Copy your key to clipboard.

4) Create a file named called devKeys.js in the keys folder: keys/devKeys.js

5) Add your API key/read token in the appropriate fields.

```
const keys = {
	apiKey: "API_KEY_GOES_HERE",
	readToken:
		"READ_TOKEN_GOES_HERE"
};

module.exports = keys;

```

## Installation

1. Install dependencies in main project folder.

```
npm install
```

2. Install dependencies in client folder.

```
npm install
```

## Running the servers

1. Start nodemon dev server.

```
npm run dev
```

## Screenshots

Coming soon...

## Built With

- React
- JavaScript
- NodeJS
- ExpressJS
- GraphQL

## APIs used

- https://developers.themoviedb.org/3/getting-started/introduction

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
