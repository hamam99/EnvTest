module.exports = ({ config }) => {
    if (process.env.MY_ENVIRONMENT === 'production') {
        return {
            ...config,
            name:'Env Test Prod',
            slug:"env-test-prod",
            android: {
                adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon-prod.png",
                backgroundColor: "#ff0"
            },
                "package": "com.bluefeatherz.EnvTest.prod"
            },
        };
      } else {
        return {
            ...config,
            name:'Env Test Dev',
            slug:"env-test-dev",
            "android": {
                "adaptiveIcon": {
                  "foregroundImage": "./assets/adaptive-icon.png",
                  "backgroundColor": "#FF0000"
                },
                "package": "com.bluefeatherz.EnvTest"
              },
        };
      }
  };