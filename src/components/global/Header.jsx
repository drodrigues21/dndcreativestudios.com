import Navbar from "./Navbar";
import ContactLogin from "./ContactLogin";
import "../styles/Header.css";

export default function Header() {
	return (
		<header id="header" className="main-header">
			<div className="main-header--container">
				<div className="main-header--logo main-header--logo-mobile">
					<a href="#header">
						<img
							src="/assets/images/logo/logo.png"
							alt="White Dream Dental Clinic Logo"
						/>
					</a>
				</div>
				<Navbar />
				<ContactLogin />
			</div>
		</header>
	);
}
