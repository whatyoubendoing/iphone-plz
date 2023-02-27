# iphone-plz

When the 14 pros came out they were pretty popylar. This was a quick prototype to notify me when an iPhone 14 Pro became available. It checks [every hour](/.github/workflows/schedule.yml#L5) during apples opening times (10am - 6pm) and sends a SMS if/when one is available.

### Technology
- [TypeScript](https://www.typescriptlang.org/)
- [GitHub actions](https://github.com/features/actions) for scheduling & deploying
- [Deno deploy](https://deno.com/deploy)
- [Twilio](https://www.twilio.com/docs/sms/send-messages) for sending SMS 💬

### Environment variables 
- `APPLE_PART_SKU` the internal SKU to search for, in this example I was looking for iPhone 14 pro / 256gb / Deep Purple (MQ1F3ZD) 💅. 
You can find this inspecting the source on the apple store page, you can also try evaluating `window.pageLevelData.rightRailSummarySection.defaultOnloadPart` in the web dev console.
- `TWILIO_SERVICE_SID`, `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN` the [Twilio account keys] (https://www.twilio.com/blog/better-twilio-authentication-csharp-twilio-api-keys)
- `FROM_NUMBER` the MISDN / mobile number sending the alert
- `TO_NUMBER` the MISDN / mobile number receiving the alert 
