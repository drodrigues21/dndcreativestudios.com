import { Outlet, NavLink } from "react-router-dom";
import "./styles/Orthodontics.css";

export default function Orthodontics() {
	return (
		<main className="page-orthodontics">
			<nav className="subnav">
				<NavLink to="/orthodontics" end>
					치아교정 홈
				</NavLink>
				<NavLink to="/orthodontics/invisalign">인비절라인</NavLink>
				<NavLink to="/orthodontics/clip-pyc">클리피씨</NavLink>
			</nav>
			<section className="subpage">
				<Outlet />
			</section>
		</main>
	);
}
