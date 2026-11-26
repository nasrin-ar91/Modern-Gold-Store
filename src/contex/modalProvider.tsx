import { useReducer, type ReactNode } from "react";
import { initialState, ModalContex } from "./modalContex";
import modalReducer from "../reducer/modalReducer";

export function ModalProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(modalReducer, initialState);
	return (
		<ModalContex.Provider value={{ state, dispatch }}>
			{children}
		</ModalContex.Provider>
	);
}
