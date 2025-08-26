import { Outlet } from "react-router-dom";
import "./styles/Treatments.css";

export default function Treatments() {
	return (
		<main className="page-treatments">
			<Outlet />
		</main>
	);
}
