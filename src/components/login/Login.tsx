import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues = {
	username: string;
	password: string;
};

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: { username: "", password: "" },
	});

	const handlerSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

	return (
		<div className="w-full h-full flex items-center justify-center py-5">
			<div className="w-[60%] max-w-md flex flex-col gap-5">
				<form
					onSubmit={handleSubmit(handlerSubmit)}
					className="bg-lighter shadow-md rounded-lg px-5 py-8"
				>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="username"
						>
							Username
						</label>
						<input
							{...register("username", {
								required: "Email is Required!",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Please enter a valid email!",
								},
							})}
							className="shadow appearance-none border border-dark rounded-lg w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-2"
							id="username"
							type="text"
							placeholder="Email..."
						/>
						<p className="text-red-800 text-sm font-medium">
							{errors.username?.message}
						</p>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							{...register("password", {
								required: "Password is required!",
								validate: (value) =>
									value.length < 5
										? "Password should be more than 5 character!"
										: true,
							})}
							id="password"
							type="password"
							placeholder="********"
							className="shadow appearance-none border border-dark rounded-lg w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-2"
						/>
						<p className="text-red-800 text-sm font-medium">
							{errors.password?.message}
						</p>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-dark hover:cursor-pointer text-secondry font-bold py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign In
						</button>
						<a
							className="inline-block align-baseline font-bold text-sm text-gray-700 hover:text-black"
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
