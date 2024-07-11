# TapTap Assignment

## Demo videos

You can find the demo videos for the assignment in the following playlist:

https://www.youtube.com/playlist?list=PLJuF39fteJJudyASicnkESSTUSJnqFmX0

## How to run the project

Assuming you already have React Native development environment setup, follow the steps below to run the project.

Install the dependencies by running `yarn` at the root of the project.

To configure the environment variables, create a `.env` file at this path `./apps/mobile/.env` with the following variables:

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

## Test

### Unit Test

Run `yarn nx run mobile:test` to run the unit tests.

### E2E Test

#### Setup

- Follow [Detox Installation](https://wix.github.io/Detox/docs/introduction/environment-setup) guide
- Make sure to setup the env file at `./apps/mobile/.env`.
- You might need to update the `./apps/mobile-e2e/detox.config.js` file to match the emulator configuration on your machine.

#### iOS

iOS build requires a paid Apple Developer account so it won't be available for this assignment project.

#### Android

First, run `yarn nx run mobile-e2e:build:android.emu.release` to build the Android app.
Then run `yarn nx run mobile-e2e:test:android.emu.release` to run the E2E test.
