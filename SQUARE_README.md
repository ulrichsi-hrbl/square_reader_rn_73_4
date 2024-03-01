## SQUARE READER STARTER APP

1.) add Square libraries.  
https://github.com/square/react-native-square-reader-sdk/blob/master/docs/get-started.md  

2.) add permissions package  
https://www.npmjs.com/package/react-native-permissions

3.) add react-native-camera-kit  
https://github.com/teslamotors/react-native-camera-kit

4.) add react-navigation  
https://reactnavigation.org/docs/getting-started/  

5.) add react-native-globalize  
https://github.com/joshswan/react-native-globalize

### ATTENTION!
'/ios/SquareReaderSDK.xcframework/' was excluded from the repo because of git file size restrictions.  
To add run in terminal on ios folder:
```
ruby <(curl https://connect.squareup.com/readersdk-installer) install \
--app-id sq0idp-ngRYJ3oGCs8uGZXAUESsSA                                 \
--repo-password hpbtm7bvnncsu6f4xjzodlgwys5zz4turb45hzjpsruu3v3b4pma
```  
this downloads "SquareReaderSDK.xcframework" into the folder "ios".
