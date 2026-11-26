import { navbar } from "../../constants/navbarList";
import NavItem from "../../utils/NavLink";

export default function Navbar({ className }: { className?: string }) {
	return (
		<div
			className={`${className} md:flex items-center gap-10 *:text-lg *:font-bold *:text-text`}
		>
			{navbar.map((item) => NavItem(item))}
		</div>
	);
}
