import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { ROUTES } from "../../router/router";

export default function Header() {
	const navigate = useNavigate();
	return (
		<div className="sticky top-0 z-50 bg-dark w-full px-5 py-3 flex flex-col gap-5 md:flex-row md:gap-50 md:px-10 relative">
			<div className="flex items-center justify-center md:justify-start">
				<img
					onClick={() => {
						navigate(ROUTES.login);
					}}
					src="/svgs/login.svg"
					alt="login"
					className="w-7 hover:cursor-pointer absolute top-1/2 -translate-y-1/2 left-4 md:left-auto md:right-10"
				/>
				<img
					onClick={() => navigate(ROUTES.home)}
					src="/images/logo.png"
					alt="logo"
					className="w-40"
				/>
				<img
					src="/svgs/menu.svg"
					alt="menu"
					className="w-10 absolute top-1/2 -translate-y-1/2 right-4 md:hidden hover:cursor-pointer text-lighter"
				/>
			</div>
			<Navbar />
		</div>
	);
}
