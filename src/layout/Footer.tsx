import { customerServices, usefulLinks } from "../constants/footerConstants";
import NavItem from "../utils/NavLink";

export default function Footer() {
	return (
		<div className="sticky top-0 z-50 bg-dark w-full px-5 py-3 md:px-10 grid grid-cols-4 gap-5">
			<div className="flex flex-col gap-1.5">
				<img src="/images/logo.png" alt="logo" className="w-24 md:w-30" />
				<p className="text-secondry text-xs leading-tight w-full md:w-1/2">
					Discover unique, handcrafted gold jewelry with Elora Gold
				</p>
			</div>
			<div className="flex flex-col gap-2">
				<h4 className="text-secondry font-bold text-md">Customer Service</h4>
				<div className="flex flex-col gap-1.5 *:text-xs *:text-secondry">
					{customerServices.map((item) => NavItem(item))}
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<h4 className="text-secondry font-bold text-md">Useful Links</h4>
				<div className="flex flex-col gap-1.5 *:text-xs *:text-secondry">
					{usefulLinks.map((item) => NavItem(item))}
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<h4 className="text-secondry font-bold text-md">Get in Touch</h4>
				<div className="flex flex-col gap-1 *:text-xs">
					<p className="text-secondry text-xs">041-3267570</p>
					<p className="text-secondry text-xs">
						Vaasa, Ostrobothnia Region, Finland
					</p>
				</div>
			</div>
		</div>
	);
}
