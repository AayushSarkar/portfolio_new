// app/providers/NextUIProviderWrapper.jsx
"use client";

import { NextUIProvider } from "@nextui-org/react";

export default function NextUIProviderWrapper({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
