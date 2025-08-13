import { Outlet, NavLink } from "react-router-dom";
import "./styles/Implants.css";

export default function Implants() {
	return (
		<main className="page-implants">
			<nav className="subnav">
				<NavLink to="/implants" end>
					임플란트 홈
				</NavLink>
				<NavLink to="/implants/bone-graft">뼈이식 임플란트</NavLink>
				<NavLink to="/implants/full-mouth">전체임플란트</NavLink>
				<NavLink to="/implants/dentures">임플란트 틀니</NavLink>
			</nav>
			<section className="subpage">
				<Outlet />
			</section>
		</main>
	);
}
