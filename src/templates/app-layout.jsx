import { Outlet } from "react-router-dom";
import Header from "../components/global/Header";
import MobileNav from "../components/global/MobileNav";
import Footer from "../components/global/Footer";

export default function AppLayout() {
	return (
		<>
			<Header />
			<MobileNav />
			<Outlet />
			<Footer />
		</>
	);
}
