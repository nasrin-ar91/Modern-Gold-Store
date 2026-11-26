import { ROUTES } from "../router/router";

export const customerServices = [
	{ text: "FAQs", route: "/" },
	{ text: "Return Policy", route: "/" },
	{ text: "Shipping Information", route: "/" },
	{ text: "Order Tracking", route: "/" },
];

export const usefulLinks = [
	{
		text: "Shop",
		route: `${ROUTES.products}`,
	},
	{
		text: "About-us",
		route: `${ROUTES.aboutUs}`,
	},
	{
		text: "Contact-us",
		route: `${ROUTES.contacts}`,
	},
];
