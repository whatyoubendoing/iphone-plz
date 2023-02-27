# iphone-plz

The iPhone 14 Pro was a highly sought after device upon its release. To help myself stay on top of its availability, I created a quick prototype that periodically checks the Apple UK Store for its availability and sends a notification via SMS one becomes available.

### Technology
- [TypeScript](https://www.typescriptlang.org/)
- [GitHub actions](https://github.com/features/actions) for scheduling & deploying
- [Deno deploy](https://deno.com/deploy)
- [Twilio](https://www.twilio.com/docs/sms/send-messages) for sending SMS 💬

### Environment variables 
- `APPLE_PART_SKU` the internal SKU to search for, in this example I was looking for iPhone 14 pro / 256gb / Deep Purple (MQ1F3ZD) 💅
- `TWILIO_SERVICE_SID`, `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN` the [Twilio account keys] (https://www.twilio.com/blog/better-twilio-authentication-csharp-twilio-api-keys)
- `FROM_NUMBER` the mobile number sending the SMS
- `TO_NUMBER` the mobile number receiving the SMS 
