import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { mantineHtmlProps, MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
    title: "Creep'Mobilités",
    description: "Un calculateur d'itinéraire pour vous déplacer dans la magnifique ville de Paris"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" {...mantineHtmlProps}>
        <body className="font-sans bg-[#f0f0f0] dark:bg-[#333] m-0 p-5 text-[#333] dark:text-white flex-col">
        <MantineProvider>
            {children}
        </MantineProvider>
        </body>
        </html>
    );
}
