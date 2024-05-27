import type { Configure } from "./types";

export const authorization = ({ ID, HASH }: Omit<Configure, "BASE_URL">) => {
  return `Basic ${Buffer.from(`${ID}:${HASH}`).toString("base64")}`;
};
