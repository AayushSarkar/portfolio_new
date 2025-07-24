// app/client-layout.jsx
'use client';

import Navbar from "@/app/components/Navbar";

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}