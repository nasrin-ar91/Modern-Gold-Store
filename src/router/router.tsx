import AboutUsPage from "../pages/about-us/AboutUsPage";
import CartPage from "../pages/carts/CartPage";
import ContactPage from "../pages/contact/ContactPage";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import ProductsPage from "../pages/products/ProductsPage";

export const ROUTES = {
	home: "/",
	products: "/products",
	carts: "/carts",
	aboutUs: "/about-us",
	contacts: "/contacts",
	login: "/login",
};

export const routes = [
	{ element: <HomePage />, path: ROUTES.home },
	{ element: <CartPage />, path: ROUTES.carts },
	{ element: <ProductsPage />, path: ROUTES.products },
	{ element: <AboutUsPage />, path: ROUTES.aboutUs },
	{ element: <ContactPage />, path: ROUTES.contacts },
	{ element: <LoginPage />, path: ROUTES.login },
];
