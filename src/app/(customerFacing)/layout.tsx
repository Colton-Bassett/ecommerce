import { Nav, NavLink } from "../components/nav";

// TODO, does this need const dynamic = "force-dynamic"
// what is the caching on this page with next15?

export const dynamic = "force-dynamic";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Nav>
				<NavLink href="/">Home</NavLink>
				<NavLink href="products">Products</NavLink>
				<NavLink href="/orders">My Orders</NavLink>
			</Nav>
			<div className="container my-6 w-full mx-auto">{children}</div>
		</>
	);
}
