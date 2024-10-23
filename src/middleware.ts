// runs before every single function/page call

import { NextRequest, NextResponse } from "next/server";
import { isValidPassword } from "./lib/isvalidPassword";

export async function middleware(req: NextRequest) {
	console.log("middleware running");
	if ((await isAuthenticated(req)) === false) {
		return new NextResponse("Unauthorized", {
			status: 401,
			headers: { "WWW-Authenticate": "Basic" },
		});
	}
}

async function isAuthenticated(req: NextRequest) {
	const authHeader =
		req.headers.get("authorization") || req.headers.get("Authorization");

	if (authHeader == null) return false;

	// username:password
	const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
		.toString()
		.split(":");

	// isValidPassword(password, "sdsdwe");

	// return false;
	return (
		username === process.env.ADMIN_USERNAME &&
		(await isValidPassword(
			password,
			process.env.ADMIN_HASHED_PASSWORD as string
		))
	);
}

// runs anytime we try to access an admin page
export const config = {
	matcher: "/admin/:path*",
};
