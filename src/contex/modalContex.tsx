import { createContext, type Dispatch } from "react";
import type { ModalAction, StateType } from "../reducer/modalReducer";

export const initialState: StateType = {
	isOpen: false,
};

export const ModalContex = createContext<{
	state: StateType;
	dispatch: Dispatch<ModalAction>;
}>({ state: initialState, dispatch: () => {} });
