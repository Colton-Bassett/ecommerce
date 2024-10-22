import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Ecommerce",
	description: "Ecommerce app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("bg-background min-h-screen antialiased")}>
				{children}
			</body>
		</html>
	);
}
