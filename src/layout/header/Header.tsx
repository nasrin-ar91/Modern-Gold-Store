import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { ROUTES } from "../../router/router";
import Search from "./Search";
import { useContext } from "react";
import { ModalContex } from "../../contex/modalContex";

export default function Header() {
	const navigate = useNavigate();
	const { dispatch } = useContext(ModalContex);
	return (
		<div className="sticky top-0 z-50 bg-dark w-full md:py-8 px-5 py-3 flex flex-col md:flex-row items-center md:justify-start md:pl-20 gap-3 md:gap-20 md:px-10 relative">
			<div className="flex items-center justify-center">
				<img
					onClick={() => navigate(ROUTES.home)}
					src="/images/logo.png"
					alt="logo"
					className="w-30 cursor-pointer md:absolute md:top-1/2 md:-translate-y-1/2 md:right-10"
				/>

				<div className="flex items-center gap-4 absolute top-8 left-5 md:left-10 md:top-1/2 md:-translate-y-1/2">
					<img
						onClick={() => {
							navigate(ROUTES.carts);
						}}
						src="/svgs/shopping-cart.svg"
						alt="cart"
						className="w-7 hover:cursor-pointer"
					/>
					<img
						onClick={() => {
							navigate(`${ROUTES.auth}?status=login`);
						}}
						src="/svgs/login.svg"
						alt="login"
						className="w-7 hover:cursor-pointer"
					/>
				</div>
				<img
					onClick={() => dispatch({ type: "OPEN" })}
					src="/svgs/menu.svg"
					alt="menu"
					className="w-10 md:hidden hover:cursor-pointer text-lighter absolute right-5 top-6"
				/>
			</div>
			<Search />
			<Navbar className="hidden" />
		</div>
	);
}
