"use client";
import { Auth0Provider } from "@auth0/auth0-react";
import { usePathname } from "next/navigation";

import React, { useEffect, useState } from "react";

export function Providers({ children }) {
  return (
    <>

        <Auth0Provider
          domain="dev-riznzze6yi6ku6jc.us.auth0.com"
          clientId="TXqeIBPouYLYDrIcpxuujQCMx1R4PcTM"
          authorizationParams={{
            // redirect_uri: 'https://yasound.vercel.app/',
            redirect_uri: 'https://yasound-git-test-royer.vercel.app/',
            // redirect_uri: 'https://localhost:3000/',
          }}
        >
          {children}
        </Auth0Provider>

    </>
  );
}
