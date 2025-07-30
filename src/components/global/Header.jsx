import Navbar from "./Navbar";
import ContactLogin from "./ContactLogin";
import "../styles/Header.css";

export default function Header() {
	return (
		<header className="main-header">
			<div className="main-header--container">
				<div className="main-header--logo">
					<img
						src="/assets/images/logo/logo.png"
						alt="White Dream Dental Clinic Logo"
					/>
				</div>
				<Navbar />
				<ContactLogin />
			</div>
		</header>
	);
}
