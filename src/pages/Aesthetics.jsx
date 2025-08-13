import { Outlet, NavLink } from "react-router-dom";
import "./styles/Aesthetics.css";

export default function Aesthetics() {
	return (
		<main className="page-aesthetics">
			<nav className="subnav">
				<NavLink to="/aesthetics" end>
					라미네이트
				</NavLink>
				<NavLink to="/aesthetics/teeth-whitening">치아미백</NavLink>
				<NavLink to="/aesthetics/gum-aesthetics">잇몸성형</NavLink>
			</nav>
			<section className="subpage">
				<Outlet />
			</section>
		</main>
	);
}
