import React, { PropsWithChildren } from "react";
import Navigation from "~/components/navigation/Navigation";

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <Navigation/>
      <main>{children}</main>
    </>
  )
}

export default Layout