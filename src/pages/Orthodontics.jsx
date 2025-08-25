import { Outlet } from "react-router-dom";
import "./styles/Orthodontics.css";

export default function Orthodontics() {
	return (
		<main className="page-orthodontics--container">
			<Outlet />
		</main>
	);
}
