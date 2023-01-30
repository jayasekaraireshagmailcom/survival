import React from "react";
import TopHeader from "./TopHeader";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopHeader title="Employee Manager"/>
      {children}
    </div>
  );
}

export default Layout;
