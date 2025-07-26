import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../templates/app-layout";
import Home from "../pages/Home";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
