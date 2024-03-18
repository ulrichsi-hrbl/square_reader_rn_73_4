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

### DEVICE COMPATIBILITY CHECK 
https://squareup.com/us/en/compatibility

### CHECKOUT RESULT
```
// details at: node_modules/react-native-square-reader-sdk/index.d.ts
// checkoutResult returned after 'success' on checkout
const checkoutResult = {
  totalTipMoney: { currencyCode: "USD", amount: 0 },
  locationId: "LTW94SZC6WKH4",
  totalMoney: { currencyCode: "USD", amount: 100 },
  transactionClientId: "785C80FB-46B0-4D15-BB50-39CF72C879A8",
  tenders:
    [{
      createdAt: "2024-03-18T17:12:10Z",
      type: "card",
      tenderId: "BiHlTNduDNpIOBSqGDo3zHPovaB",
      cardDetails:
        {
          entryMethod: "CONTACTLESS",
          card:
            {
              lastFourDigits: "1111",
              cardholderName: "Visa Cardholder",
              brand: "VISA",
            },
        },
      tipMoney: { amount: 0, currencyCode: "USD" },
      totalMoney: { amount: 100, currencyCode: "USD" },
    }],
  createdAt: "2024-03-18T17:12:15Z",
  transactionId: "NzVg31M9upD9I24KsFHFRlkeV",
};
```
