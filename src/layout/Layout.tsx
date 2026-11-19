import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

export default function Layout() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow bg-secondry">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
