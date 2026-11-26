import z from "zod";

export const LoginFormSchema = z.object({
	username: z.email().min(1, { message: "Username is Required." }),
	password: z
		.string()
		.min(1, { message: "Password is Required." })
		.min(6, "Password must contain at least 6 characters.")
		.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
			message: "Password must include uppercase, lowercase, and a number.",
		}),
});

export type LoginData = z.infer<typeof LoginFormSchema>;
