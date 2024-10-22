import { Nav, NavLink } from "../components/nav";

// TODO, does this need const dynamic = "force-dynamic"
// what is the caching on this page with next15?

export const dynamic = "force-dynamic";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Nav>
				<NavLink href="/admin">Dashboard</NavLink>
				<NavLink href="/admin/products">Products</NavLink>
				<NavLink href="/admin/users">Customers</NavLink>
				<NavLink href="/admin/sales">Sales</NavLink>
			</Nav>
			<div className="container my-6 w-full mx-auto">{children}</div>
		</>
	);
}