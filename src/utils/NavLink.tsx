import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ModalContex } from "../contex/modalContex";

export default function NavItem({
	text,
	route,
}: {
	text: string;
	route: string;
}) {
	const { dispatch } = useContext(ModalContex);
	return (
		<NavLink
			className={({ isActive }) => (isActive ? "text-secondry" : "unset")}
			to={route}
			onClick={() => dispatch({ type: "CLOSE" })}
		>
			{text}
		</NavLink>
	);
}
