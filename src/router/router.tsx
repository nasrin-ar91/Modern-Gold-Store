import AboutUsPage from "../pages/about-us/AboutUsPage";
import AuthPage from "../pages/auth/AuthPage";
import CartPage from "../pages/carts/CartPage";
import ContactPage from "../pages/contact/ContactPage";
import HomePage from "../pages/home/HomePage";
import ProductsPage from "../pages/products/ProductsPage";

export const ROUTES = {
	home: "/",
	products: "/products",
	carts: "/carts",
	aboutUs: "/about-us",
	contacts: "/contacts",
	auth: "/auth",
};

export const routes = [
	{ element: <HomePage />, path: ROUTES.home },
	{ element: <CartPage />, path: ROUTES.carts },
	{ element: <ProductsPage />, path: ROUTES.products },
	{ element: <AboutUsPage />, path: ROUTES.aboutUs },
	{ element: <ContactPage />, path: ROUTES.contacts },
	{ element: <AuthPage />, path: ROUTES.auth },
];
