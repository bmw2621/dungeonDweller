import { writable } from "svelte/store";

export const campaignId = writable(null);
export const allCampaigns = writable([]);
export const selectedCampaign = writable(null);
export const campaignMap = writable(null);
export const overlays = writable([]);
