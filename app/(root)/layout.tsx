import React from "react";
import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-primary-100 min-h-screen">
      <Navbar />

      {children}
    </main>
  );
};

export default Layout;
