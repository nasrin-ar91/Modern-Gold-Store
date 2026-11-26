import { useSearchParams } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./signUpPage";

export default function AuthPage() {
	const [searchParam] = useSearchParams();
	const status = searchParam.get("status");
	return <>{status === "login" ? <LoginPage /> : <SignUpPage />}</>;
}
