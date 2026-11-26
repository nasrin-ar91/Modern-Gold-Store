export type ModalAction = { type: "OPEN" } | { type: "CLOSE" };
export type StateType = {
	isOpen: boolean;
};

export default function modalReducer(state: StateType, action: ModalAction) {
	switch (action.type) {
		case "OPEN":
			return { isOpen: true };
		case "CLOSE":
			return { isOpen: false };
		default:
			return state;
	}
}
