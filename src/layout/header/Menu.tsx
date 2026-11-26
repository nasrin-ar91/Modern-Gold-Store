import { useContext } from "react";
import Navbar from "./Navbar";
import { ModalContex } from "../../contex/modalContex";

export default function Menu() {
	const { dispatch } = useContext(ModalContex);
	return (
		<div
			onClick={() => dispatch({ type: "CLOSE" })}
			className="fixed z-50 inset-0 bg-black/50"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="absolute top-0 right-0 w-1/2 h-screen flex flex-col justify-between bg-secondry"
			>
				<Navbar className="flex flex-col pt-5" />
			</div>
		</div>
	);
}
