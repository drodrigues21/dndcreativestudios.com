import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import UserLogin from "./UserLogin";
import "../styles/Header.css";

export default function Header({ showLogo = true }) {
	return (
		<header id="header" className="main-header">
			<div className="main-header--container">
				{showLogo && (
					<div className="main-header--logo-mobile">
						<Link to="/">
							<img
								src="/assets/images/logo/logo.png"
								alt="White Dream Dental Clinic Logo"
							/>
						</Link>
					</div>
				)}
				<div className="main-header--logo main-header--logo-desktop">
					<Link to="/">
						<img
							src="/assets/images/logo/logo.png"
							alt="White Dream Dental Clinic Logo"
						/>
					</Link>
				</div>
				<Navbar />
				<UserLogin />
			</div>
		</header>
	);
}
