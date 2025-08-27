import logo from "/assets/images/logo/logo.png";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "../styles/LoginPage.css";

export default function LoginPage() {
	const { login } = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		const result = login(email.trim(), password);
		if (result.ok) {
			setError("");
			navigate(-1);
		} else {
			setError("User doesn't exist");
		}
	};

	return (
		<>
			<header className="login-page--header">
				<img src={logo} alt="logo" />
			</header>
			<div className="login-page--container">
				<div className="login-page--title">
					<h1>Login</h1>
				</div>
				<div className="login-page--container-inner">
					<div className="login-page--form-container">
						<form className="login-page--form" onSubmit={onSubmit}>
							<div className="login-page--form-input">
								<MdEmail className="login-page--form-input-icon" />
								<input
									type="text"
									placeholder={"Email"}
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div className="login-page--form-input">
								<MdLock className="login-page--form-input-icon" />
								<input
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							{error && (
								<div className="login-page--form-error" role="alert">
									{error}
								</div>
							)}
							<div className="login-page--form-forgot-password">
								<a href="#">Forgot your password?</a>
							</div>
							<div className="login-page--form-button">
								<input type="submit" value="Log in" />
							</div>
						</form>
					</div>
					<div className="login-page--form-signup">
						<p>Don't have an account yet?</p>
						<a href="#">Sign up</a>
					</div>
				</div>
			</div>
		</>
	);
}
