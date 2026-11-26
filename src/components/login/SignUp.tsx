import { useForm, type SubmitHandler } from "react-hook-form";
import { SignUpSchema, type SignUpData } from "./SignUpValidate";
import { zodResolver } from "@hookform/resolvers/zod";

// type registerValues = {
// 	username: string;
// 	email: string;
// 	password: string;
// 	repeatPassword: string;
// };

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpData>({
		resolver: zodResolver(SignUpSchema),
		defaultValues: {
			username: "",
			password: "",
			repeatPassword: "",
		},
	});

	const handlerSubmit: SubmitHandler<SignUpData> = (data) => console.log(data);

	return (
		<div className="w-full h-full flex items-center justify-center py-5">
			<div className="w-[60%] max-w-md flex flex-col gap-5">
				<form
					noValidate
					onSubmit={handleSubmit(handlerSubmit)}
					className="bg-lighter shadow-md rounded-lg px-5 pb-8"
				>
					<h2 className="text-2xl font-semibold text-text my-5">Sign Up</h2>
					<div className="mb-4">
						<label
							className="block text-text text-sm font-bold mb-2"
							htmlFor="username"
						>
							Username
						</label>
						<input
							{...register("username")}
							className="shadow appearance-none border border-dark rounded-lg w-full p-3 text-text leading-tight focus:outline-none focus:ring-dark focus:ring-1"
							id="username"
							type="text"
							placeholder="Email..."
						/>
						<p className="text-red-800 text-xs font-medium">
							{errors.username?.message}
						</p>
					</div>
					<div className="mb-4">
						<label
							className="block text-text text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							{...register("password")}
							id="password"
							type="password"
							placeholder="********"
							className="shadow appearance-none border border-dark rounded-lg w-full p-3 text-gray-700 leading-tight focus:outline-none focus:ring-dark focus:ring-1"
						/>
						<p className="text-red-800 text-xs font-medium">
							{errors.password?.message}
						</p>
					</div>
					<div className="mb-4">
						<label
							className="block text-text text-sm font-bold mb-2"
							htmlFor="repeatPassword"
						>
							repeatPassword
						</label>
						<input
							{...register("repeatPassword")}
							id="repeatPassword"
							type="password"
							placeholder="********"
							className="shadow appearance-none border border-dark rounded-lg w-full p-3 text-gray-700 leading-tight focus:outline-none focus:ring-dark focus:ring-1"
						/>
						<p className="text-red-800 text-xs font-medium">
							{errors.repeatPassword?.message}
						</p>
					</div>
					<button
						className="w-full bg-dark hover:cursor-pointer text-secondry font-bold py-2 mt-3 px-8 rounded-lg focus:outline-none focus:shadow-outline hover:scale-98"
						type="submit"
					>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
}
