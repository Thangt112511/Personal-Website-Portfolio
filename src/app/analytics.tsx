"use client";

import { Analytics } from "@vercel/analytics/next";

export default function MyAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => {
        if (typeof window !== "undefined" && localStorage.getItem("va-ignore") === "1") {
          return null; 
        }
        return event; 
      }}
    />
  );
}
