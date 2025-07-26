import { Outlet } from "react-router-dom";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

export default function AppLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
