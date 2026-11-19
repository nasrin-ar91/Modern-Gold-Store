import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./router";
import Layout from "../layout/Layout";

export default function AppRouter() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						{routes.map((page, index) => (
							<Route key={index} element={page.element} path={page.path} />
						))}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
