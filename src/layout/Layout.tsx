import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import Menu from "./header/Menu";
import { useContext } from "react";
import { ModalContex } from "../contex/modalContex";

export default function Layout() {
	const { state } = useContext(ModalContex);

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow bg-secondry">
				<Outlet />
			</main>
			<Footer />
			{state.isOpen && <Menu />}
		</div>
	);
}
