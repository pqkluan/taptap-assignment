# TapTap Assignment

## How to run the project

Assuming you already have React Native development environment setup, follow the steps below to run the project.

Install the dependencies by running `yarn` at the root of the project.

To configure the environment variables, create a `.env` file at the root of the project and add the following variables:

```env
DEFAULT_USERNAME=instagram
RAPID_API_HOST=instagram-scraper-api2.p.rapidapi.com
RAPID_API_KEY=3ffebdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Note: the `RAPID_API_KEY` is a placeholder, you need to replace it with your own key.
You could get the key by subscribing to the [Instagram Scraper API](https://rapidapi.com/social-api1-instagram/api/instagram-scraper-api2/playground).

### iOS

Run `yarn nx run mobile:pod-install` to install pods.

Run `yarn nx run mobile:run-ios` to build and run the iOS application.

### Android

Run `yarn nx run mobile:run-android` to build and run the Android application.
