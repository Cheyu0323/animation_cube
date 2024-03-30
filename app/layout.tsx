import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Cube",
    description: "use Three.js csg to create animated cube",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
