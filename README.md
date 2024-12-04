# Expo Linking API: Inconsistent Android Deep Link Handling

This repository demonstrates a bug in Expo's `Linking` API when handling deep links on Android.  The issue involves inconsistent behavior where deep links sometimes open the app to the home screen instead of the intended internal route. This makes debugging and providing a consistent user experience challenging.

## Bug Description

The core problem lies in the unreliability of the `Linking.addEventListener` and `Linking.openURL` methods when dealing with custom URL schemes and Android's deep link mechanisms.  There's no apparent pattern to when the failure occurs, making it challenging to identify the root cause.

## Reproduction Steps

1. Clone the repository.
2. Run `expo start`.
3. Build and run the Android version of the app.
4. Attempt to open a deep link using a custom URL scheme (example: `myapp://myroute`).
5. Observe the inconsistent behavior of the app opening to either the intended route or the home screen.

## Solution

The proposed solution involves a more robust approach to handling deep links that accounts for potential inconsistencies.  This includes implementing additional checks and fallbacks to ensure the app always lands on the expected screen, regardless of the deep link's successful or unsuccessful initial navigation.

## Technologies Used

* Expo CLI
* React Native
* JavaScript