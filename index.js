const response = await fetch(
  "https://www.apple.com/uk/shop/fulfillment-messages?pl=true&mts.0=regular&mts.1=compact&parts.0=MQ1F3ZD/A&location=E107JS"
);
const json = await response.json();

json.body.content.pickupMessage.stores.forEach((store) => {
  console.log(
    `${store.storeName} - ${store.partsAvailability["MQ1F3ZD/A"].pickupDisplay}`
  );
});
