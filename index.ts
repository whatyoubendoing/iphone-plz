import { Twilio } from "https://deno.land/x/twilio@0.1.1/Twilio.ts";
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

import { FulfillmentResponse } from "./types.ts";

const partSku = Deno.env.get("APPLE_PART_SKU")!;

console.log(partSku);

const twilio = new Twilio(
  Deno.env.get("TWILIO_ACCOUNT_SID")!,
  Deno.env.get("TWILIO_AUTH_TOKEN")!,
  Deno.env.get("TWILIO_SERVICE_SID")!,
  Deno.env.get("FROM_NUMBER")!
);

type Availability = "available" | "unavailable";

type Store = {
  name: string;
  status: Availability;
};

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);

  const response = await fetch(
    `https://www.apple.com/uk/shop/fulfillment-messages?pl=true&mts.0=regular&mts.1=compact&parts.0=${partSku}&location=E107JS`
  );
  const json = (await response.json()) as FulfillmentResponse;

  const stores = json.body.content.pickupMessage.stores.map(
    (store) =>
      ({
        name: store.storeName,
        status:
          store?.partsAvailability[partSku]?.pickupDisplay ?? "unavailable",
      } as Store)
  );
  const isAvailable = stores.some((store) => store.status === "available");
  const message = `${partSku} is ${isAvailable ? "👌" : "🙅"}`;

  if (url.searchParams.get("sms")) {
    await twilio.sendMessage(Deno.env.get("TO_NUMBER")!, message);
  }

  return new Response(message);
}

serve(handler);
