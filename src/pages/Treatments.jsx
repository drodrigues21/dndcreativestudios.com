import { Outlet, NavLink } from "react-router-dom";
import "./styles/Treatments.css";

export default function Treatments() {
	return (
		<main className="page-treatments">
			<nav className="subnav">
				<NavLink to="/treatments" end>
					충치치료
				</NavLink>
				<NavLink to="/treatments/root-canal">신경치료</NavLink>
				<NavLink to="/treatments/wisdom-tooth-removal">사랑니 발치</NavLink>
				<NavLink to="/treatments/tmj-treatment">턱관절치료</NavLink>
				<NavLink to="/treatments/gum-disease-treatment">잇몸치료</NavLink>
			</nav>
			<section className="subpage">
				<Outlet />
			</section>
		</main>
	);
}
