# Photo-Feed - React Native app

Example photo feed app that uses [Pexels API](https://www.pexels.com/api/) as data source.

## What's included

- Simple routing with [Expo Router](https://docs.expo.dev/routing/introduction/)
- Caching by utilizing [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) and [Expo Image](https://docs.expo.dev/versions/latest/sdk/image/)
- Infinite scroll using [FlashList](https://shopify.github.io/flash-list/)
- Simple animations with [Moti](https://moti.fyi/)
- Feature-oriented project structure inspired by [NX concepts](https://nx.dev/concepts/more-concepts/library-types)
- Code linting and formatting using ESlint & Prettier (with pre-commit auto-formatting)

## Development

See `package.json` for pre-defined scripts. You can run them using `npm run {script}` or `yarn {script}` :

- `start` - Start local `development`-env server to develop with [Expo Go](https://docs.expo.dev/get-started/expo-go/)
- `lint` - Lint code
- `format` - Run code autoformat
- `verify` - Run necessary code checks
- `build` - Create builds using EAS for _both_ platforms. Pass `-p {android|ios}` to run a platform-specific build

NOTE: Before you proceed please make sure to specify your own Pexels API key in `.env` file.

## Demo app

To preview the app with [Expo Go](https://docs.expo.dev/get-started/expo-go/) use the following QR-codes:

<details>

<summary>Android</summary>

![android](https://qr.expo.dev/eas-update?updateId=ea4f0308-1c3d-4436-9011-e800fbbed692&appScheme=exp&host=u.expo.dev)

</details>

<details>
<summary>iOS</summary>

![iOS](https://qr.expo.dev/eas-update?updateId=cf2adb6a-550c-4112-84df-c458c7692b34&appScheme=exp&host=u.expo.dev)

</details>

NOTE: You may need to use VPN on your device is some countries.
