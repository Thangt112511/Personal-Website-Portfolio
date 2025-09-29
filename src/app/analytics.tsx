"use client";  

import { Analytics } from "@vercel/analytics/next";

export default function MyAnalytics() {
  return (
    <Analytics
      beforeSend={(event: BeforeSendEvent) => {
        if (typeof window !== "undefined" && localStorage.getItem("va-ignore") === "1") {
          return null; // drop hit
        }
        return event;
      }}
    />
  );
}
