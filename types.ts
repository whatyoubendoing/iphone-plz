export interface FulfillmentResponse {
  body: FulfillmentResponseBody;
}
interface FulfillmentResponseBody {
  content: FulfillmentResponseContent;
}
interface FulfillmentResponseContent {
  pickupMessage: FulfillmentResponsePickupMessage;
}
interface FulfillmentResponsePickupMessage {
  stores: FulfillmentResponseStoresItem[];
  overlayInitiatedFromWarmStart: boolean;
  viewMoreHoursLinkText: string;
  storesCount: string;
  little: boolean;
  location: string;
  notAvailableNearby: string;
  notAvailableNearOneStore: string;
  warmDudeWithAPU: boolean;
  viewMoreHoursVoText: string;
  availability: FulfillmentResponseAvailability;
  viewDetailsText: string;
  legendLabelText: string;
  filteredTopStore: boolean;
}
interface FulfillmentResponseStoresItem {
  storeEmail: string;
  storeName: string;
  reservationUrl: string;
  makeReservationUrl: string;
  storeImageUrl: string;
  country: string;
  city: string;
  storeNumber: string;
  partsAvailability: {
    [key: string]: FulfillmentResponsePartsAvailability;
  };
  phoneNumber: string;
  pickupTypeAvailabilityText: string;
  address: FulfillmentResponseAddress;
  hoursUrl: string;
  storeHours: FulfillmentResponseStoreHours;
  storelatitude: number;
  storelongitude: number;
  storedistance: number;
  storeDistanceWithUnit: string;
  storeDistanceVoText: string;
  retailStore: FulfillmentResponseRetailStore;
  storelistnumber: number;
  storeListNumber: number;
  pickupOptionsDetails: FulfillmentResponsePickupOptionsDetails;
  rank: number;
}

type FulfillmentResponsePickupDisplay = "unavailable" | "available";

interface FulfillmentResponsePartsAvailability {
  storePickEligible: boolean;
  pickupSearchQuote: string;
  partNumber: string;
  purchaseOption: string;
  ctoOptions: string;
  pickupDisplay: string;
  pickupType: string;
  messageTypes: FulfillmentResponseMessageTypes;
}
interface FulfillmentResponseMessageTypes {
  compact: FulfillmentResponseCompact;
  regular: FulfillmentResponseRegular;
}
interface FulfillmentResponseCompact {
  storeSearchEnabled: boolean;
  storePickupLabel: string;
  storeSelectionEnabled: boolean;
  storePickupQuote: string;
  storePickupLinkText: string;
  storePickupProductTitle: string;
  label?: string;
  quote?: string;
  address?: FulfillmentResponseAddress;
  showDeliveryOptionsLink?: boolean;
  messageType?: string;
  basePartNumber?: string;
  commitCodeId?: string;
  subHeader?: string;
  defaultLocationEnabled?: boolean;
  idl?: boolean;
  inHomeSetup?: boolean;
  isElectronic?: boolean;
  isBuyable?: boolean;
}
interface FulfillmentResponseRegular {
  storeSearchEnabled: boolean;
  storePickupLabel: string;
  storeSelectionEnabled: boolean;
  storePickupQuote: string;
  storePickupQuote2_0: string;
  storePickupLinkText: string;
  storePickupProductTitle: string;
  orderByDeliveryBy?: string;
  deliveryOptionMessages?: FulfillmentResponseDeliveryOptionMessagesItem[];
  deliveryOptions?: FulfillmentResponseDeliveryOptionsItem[];
  deliveryOptionsLink?: FulfillmentResponseDeliveryOptionsLink;
  address?: FulfillmentResponseAddress;
  showDeliveryOptionsLink?: boolean;
  messageType?: string;
  basePartNumber?: string;
  commitCodeId?: string;
  subHeader?: string;
  defaultLocationEnabled?: boolean;
  idl?: boolean;
  inHomeSetup?: boolean;
  isElectronic?: boolean;
  isBuyable?: boolean;
}
interface FulfillmentResponseAddress {
  address?: string;
  address3?: string | null;
  address2?: string;
  postalCode: string;
  city?: string;
  companyName?: string;
  countryCode?: string;
  county?: null;
  district?: null;
  geoCode?: null;
  label?: null;
  languageCode?: string;
  mailStop?: null;
  province?: null;
  state?: null;
  street?: string;
  street2?: string | null;
  street3?: null | string;
  suburb?: null;
  type?: string;
  addrSourceType?: null;
  outsideCityFlag?: null;
  daytimePhoneAreaCode?: null;
  eveningPhoneAreaCode?: null;
  daytimePhone?: string;
  fullPhoneNumber?: null;
  eveningPhone?: null;
  emailAddress?: null;
  firstName?: null;
  lastName?: null;
  suffix?: null;
  lastNamePhonetic?: null;
  firstNamePhonetic?: null;
  title?: null;
  businessAddress?: boolean;
  uuid?: string;
  mobilePhone?: null;
  mobilePhoneAreaCode?: null;
  cityStateZip?: null;
  daytimePhoneSelected?: boolean;
  middleName?: null;
  residenceStatus?: null;
  moveInDate?: null;
  subscriberId?: null;
  locationType?: null;
  carrierCode?: null;
  verificationState?: string;
  expiration?: null;
  markForDeletion?: boolean;
  primaryAddress?: boolean;
  fullEveningPhone?: null;
  fullDaytimePhone?: string;
  correctionResult?: null;
  twoLineAddress?: string;
  addressVerified?: boolean;
}
interface FulfillmentResponseStoreHours {
  storeHoursText: string;
  bopisPickupDays: string;
  bopisPickupHours: string;
  hours: FulfillmentResponseHoursItem[];
}
interface FulfillmentResponseHoursItem {
  storeTimings: string;
  storeDays: string;
}
interface FulfillmentResponseRetailStore {
  storeNumber: string;
  storeUniqueId: string;
  name: string;
  storeTypeKey: string;
  storeSubTypeKey: string;
  storeType: string;
  phoneNumber: string;
  email: string;
  carrierCode: null;
  locationType: null;
  latitude: number;
  longitude: number;
  address: FulfillmentResponseAddress;
  urlKey: null;
  directionsUrl: null;
  storeImageUrl: string;
  makeReservationUrl: string;
  hoursAndInfoUrl: string;
  storeHours: FulfillmentResponseStoreHoursItem[];
  secureStoreImageUrl: string;
  distance: number;
  distanceUnit: string;
  distanceWithUnit: string;
  timezone: string;
  storeIsActive: boolean;
  lastUpdated: number;
  lastFetched: number;
  dateStamp: string;
  distanceSeparator: string;
  nextAvailableDate: null;
  storeHolidayLookAheadWindow: number;
  driveDistanceWithUnit: null;
  driveDistanceInMeters: null;
  storePickupMethodByType: FulfillmentResponseStorePickupMethodByType;
  storeTimings: null;
  availableNow: boolean;
}
interface FulfillmentResponseStoreHoursItem {
  storeDays: string;
  voStoreDays: string;
  storeTimings: string;
}
interface FulfillmentResponseStorePickupMethodByType {
  INSTORE: FulfillmentResponseINSTORE;
  POPUP?: FulfillmentResponsePOPUP;
}
interface FulfillmentResponseINSTORE {
  typeCoordinate: FulfillmentResponseTypeCoordinate;
  typeDirection: FulfillmentResponseTypeDirection;
  typeMeetupLocation: FulfillmentResponseTypeMeetupLocation;
  type: string;
  services: string[];
}
interface FulfillmentResponseTypeCoordinate {
  lat: number;
  lon: number;
}
interface FulfillmentResponseTypeDirection {
  directionByLocale: null | FulfillmentResponseDirectionByLocale;
}
interface FulfillmentResponseTypeMeetupLocation {
  meetingLocationByLocale: null;
}
interface FulfillmentResponsePickupOptionsDetails {
  whatToExpectAtPickup: string;
  comparePickupOptionsLink: string;
  pickupOptions: FulfillmentResponsePickupOptionsItem[];
}
interface FulfillmentResponsePickupOptionsItem {
  pickupOptionTitle: string;
  pickupOptionDescription: string;
  index: number;
}
interface FulfillmentResponsePOPUP {
  typeCoordinate: FulfillmentResponseTypeCoordinate;
  typeDirection: FulfillmentResponseTypeDirection;
  typeMeetupLocation: FulfillmentResponseTypeMeetupLocation;
  type: string;
  services: string[];
}
interface FulfillmentResponseDirectionByLocale {
  en_GB: string;
}
interface FulfillmentResponseAvailability {
  isComingSoon: boolean;
}
interface FulfillmentResponseDeliveryOptionMessagesItem {
  displayName: string;
  inHomeSetup: string;
  encodedUpperDateString: string;
}
interface FulfillmentResponseDeliveryOptionsItem {
  displayName: string;
  date: string;
  shippingCost: string;
  additionalContent: null;
}
interface FulfillmentResponseDeliveryOptionsLink {
  text: string;
  newTab: boolean;
}
