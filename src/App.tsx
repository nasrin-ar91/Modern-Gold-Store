import { ModalProvider } from "./contex/modalProvider";
import AppRouter from "./router/AppRouter";

function App() {
	return (
		<>
			<ModalProvider>
				<AppRouter />
			</ModalProvider>
		</>
	);
}

export default App;
