import { ExpoConfig } from '@expo/config';

const createConfig = (): ExpoConfig => {
  const projectId = '09aa1808-5c82-4db3-8b14-a551776be0dc';

  return {
    slug: 'photos-feed',
    experiments: {
      tsconfigPaths: true
    },
    name: 'Photos Feed',
    scheme: 'rn.photos-feed.dev',
    owner: 'ipakhomov',
    version: '0.1.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#FFFFFFF'
    },
    web: {
      favicon: './assets/images/favicon.png',
      bundler: 'metro'
    },
    updates: {
      url: `https://u.expo.dev/${projectId}`
    },
    runtimeVersion: {
      policy: 'sdkVersion'
    },
    extra: {
      eas: {
        projectId
      }
    }
  };
};

module.exports = createConfig;
