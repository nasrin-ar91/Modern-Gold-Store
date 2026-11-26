import z from "zod";

export const SignUpSchema = z
	.object({
		username: z.email().min(1, { message: "Username is Required." }),
		password: z
			.string()
			.min(1, { message: "Password is Required." })
			.min(6, "Password must contain at least 6 characters.")
			.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
				message: "Password must include uppercase, lowercase, and a number.",
			}),
		repeatPassword: z.string(),
	})
	.refine((data) => data.password === data.repeatPassword, {
		message: "Password don't match.",
		path: ["repeatPassword"],
	});

export type SignUpData = z.infer<typeof SignUpSchema>;
