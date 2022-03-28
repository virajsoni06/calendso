import type { App } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Tandem Video",
  description: _package.description,
  installed: !!(process.env.TANDEM_CLIENT_ID && process.env.TANDEM_CLIENT_SECRET),
  type: "tandem_video",
  title: "Tandem Video",
  imageSrc: "/apps/tandem.svg",
  variant: "conferencing",
  label: "",
  slug: "tandem",
  category: "video",
  logo: "/apps/tandem.svg",
  publisher: "",
  url: "",
  verified: true,
  trending: true,
  rating: 0,
  reviews: 0,
  isGlobal: false,
  email: "help@cal.com",
  locationType: "integrations:tandem",
} as App;

export * as api from "./api";
export * as lib from "./lib";
