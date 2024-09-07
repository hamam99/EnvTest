# How to run the project



# ENV
- Production (production)
- Development (dev)

## How to run Development in Android
1. rm -rf /android
2.  MY_ENVIRONMENT=dev npx expo prebuild 
3. MY_ENVIRONMENT=dev npx expo run:android


## How to run Production in Android
1. rm -rf /android
2.  MY_ENVIRONMENT=production npx expo prebuild 
3. MY_ENVIRONMENT=production npx expo run:android

## File to check
1. app.config.js
	2. Handle between environtment
2. app.json --> handle default config