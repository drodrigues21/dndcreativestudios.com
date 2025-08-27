import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../routes/ScrollToTop";
import Header from "../components/global/Header";
import MobileNav from "../components/global/MobileNav";
import TopNavbar from "../components/global/TopNavbar";
import BreadcrumbBar from "../components/global/BreadcrumbBar";
import Footer from "../components/global/Footer";

export default function AppLayout() {
	const { pathname } = useLocation();

	return (
		<>
			<Header showLogo={pathname === "/"} />
			<TopNavbar />
			<MobileNav />
			<ScrollToTop />
			<div className="container">
				<BreadcrumbBar />
				<Outlet />
			</div>
			<Footer />
		</>
	);
}
