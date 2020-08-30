import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Intro: {
            screens: {
              Intro: 'Intro'
            }
          },
          Auth: {
            screens: {
              Auth: 'Auth'
            }
          },
          Page01: {
            screens: {
              Page01: 'Page01',
            },
          },
          Page02: {
            screens: {
              Page02: 'Page02',
            },
          },
          Notifications: {
            screens: {
              Notifications: 'Notifications',
            },
          },
          Settings: {
            screens: {
              Settings: 'Settings',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
