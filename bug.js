While developing an Expo app, I encountered an unusual error related to the interaction between Expo's `Linking` API and Android's deep linking capabilities.  Specifically, when a user clicked a deep link, the app wouldn't always open correctly. Sometimes it would open to the home screen instead of the intended route. This behavior was inconsistent and difficult to reproduce reliably.