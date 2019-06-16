## ReactNativeTestApp

Simple app, that fetches data from unsplash api and displays in app

Form this app you need to have node.js, npm, and react-native

### Installation

First install node packages:

```sh

npm install

```

Run dev-server with app on connected divice or emulator

```sh

react-native run-android                  

```

# Build

### Android

First you need too grab your keystore and put to `android/app` folder and replace in file `android/app/build.gradle`

```
    signingConfigs {
        release {
                storeFile file("my-release-key.keystore")
                storePassword "62137990"
                keyAlias "my-key-alias"
                keyPassword "62137990"
        }
    }
```
with your keystore information

```sh

cd android
./gradlew assembleRelease

```

And go grab your .apk in `app/build/outputs/apk/release/` 


### IOS

I haven't tested this app with ios because i don't have such a tools(
