import { NavLink } from "react-router-dom";
import { ROUTES } from "../../router/router";

export default function Navbar() {
	return (
		<div className="hidden items-center gap-12 md:flex *:text-xl *:font-bold">
			<NavLink
				className={({ isActive }) => (isActive ? "text-secondry" : "unset")}
				to={ROUTES.home}
			>
				Home
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? "text-secondry" : "unset")}
				to={ROUTES.aboutUs}
			>
				About-us
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? "text-secondry" : "unset")}
				to={ROUTES.contacts}
			>
				Contact-us
			</NavLink>
		</div>
	);
}
