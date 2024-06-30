import Reactotron from 'reactotron-react-native'

// eslint-disable-next-line no-undef
if (__DEV__) {
  Reactotron.configure()
    .useReactNative({
      networking: {
        ignoreUrls: /symbolicate|127.0.0.1|localhost/,
      },
    })
    .connect()
}
