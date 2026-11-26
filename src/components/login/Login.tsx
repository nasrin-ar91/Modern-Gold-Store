import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema, type LoginData } from "./LoginValidate";

// type FormValues = {
// 	username: string;
// 	password: string;
// };

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginData>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: { username: "", password: "" },
	});

	const handlerSubmit: SubmitHandler<LoginData> = (data) => console.log(data);

	return (
		<div className="w-full h-full flex items-center justify-center py-5">
			<div className="w-[60%] max-w-md flex flex-col gap-5">
				<form
					noValidate
					onSubmit={handleSubmit(handlerSubmit)}
					className="bg-lighter shadow-md rounded-lg px-5 pb-8"
				>
					<h2 className="text-2xl font-semibold text-text my-5">Log In</h2>
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
						<p className="text-red-800 text-xs font-medium mt-1">
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
						<p className="text-red-800 text-xs font-medium mt-1">
							{errors.password?.message}
						</p>
					</div>
					<div className="mb-4 text-text text-sm">
						Don't have an account?
						<Link
							to={`${ROUTES.auth}?status=signup`}
							className="text-text text-sm border-b border-text pb-0.5 ml-2 hover:text-gray-800"
						>
							Sign up
						</Link>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-dark hover:cursor-pointer text-secondry font-bold py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign In
						</button>
						<a
							className="inline-block align-baseline font-bold text-sm text-text hover:text-gray-800"
							target="_blank"
							href="#"
						>
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	);
}
