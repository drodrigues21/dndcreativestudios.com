import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../templates/app-layout";
import Home from "../pages/Home";
import DoctorsProfile from "../pages/DoctorsProfile";
import DoctorProfile from "../pages/DoctorProfile";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs";
import Facilities from "../pages/Facilities";
import Devices from "../pages/Devices";
import HoursAndFindUsHere from "../pages/HoursAndFindUsHere";
import Orthodontics from "../pages/Orthodontics";
import OrthodonticsHome from "../components/OrthodonticsHome";
import OrthodonticsInvisalign from "../components/OrthodonticsInvisalign";
import OrthodonticsClipPyc from "../components/OrthodonticsClipPyc";
import Implants from "../pages/Implants";
import ImplantHome from "../components/ImplantHome";
import ImplantBoneGraft from "../components/ImplantBoneGraft";
import ImplantFullMouth from "../components/ImplantFullMouth";
import ImplantDentures from "../components/ImplantDentures";
import Aesthetics from "../pages/Aesthetics";
import AestheticWhitinyVeneers from "../components/AestheticWhitinyVeneers";
import AestheticTeethWhitening from "../components/AestheticTeethWhitening";
import AestheticGumAesthetics from "../components/AestheticGumAesthetics";
import Treatments from "../pages/Treatments";
import ToothDecayTreatment from "../components/ToothDecayTreatment";
import RootCanalTreatment from "../components/RootCanalTreatment";
import WisdomToothRemoval from "../components/WisdomToothRemoval";
import TMJtreatment from "../components/TMJtreatment";
import GumDiseaseTreatment from "../components/GumDiseaseTreatment";
import CommunityNotice from "../pages/CommunityNotice";
import CommunityNoticeForm from "../components/CommunityNoticeForm";
import CommunityWithStars from "../pages/CommunityWithStars";
import CommunityWithStarForm from "../components/CommunityWithStarForm";
import CommunityWithStarDetail from "../components/CommunityWithStarDetail";
import LoginPage from "../components/global/LoginPage";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path="doctors-profile" element={<DoctorsProfile />} />
					<Route path="doctors/:id" element={<DoctorProfile />} />

					{/* About / Facilities / Devices / Hours */}
					<Route path="about-us" element={<AboutUs />} />
					<Route path="facilities" element={<Facilities />} />
					<Route path="devices" element={<Devices />} />
					<Route
						path="hours-and-find-us-here"
						element={<HoursAndFindUsHere />}
					/>

					{/* Orthodontics */}
					<Route path="orthodontics" element={<Orthodontics />}>
						<Route index element={<OrthodonticsHome />} />
						<Route path="invisalign" element={<OrthodonticsInvisalign />} />
						<Route path="clip-pyc" element={<OrthodonticsClipPyc />} />
					</Route>

					{/* Implants */}
					<Route path="implants" element={<Implants />}>
						<Route index element={<ImplantHome />} />
						<Route path="bone-graft" element={<ImplantBoneGraft />} />
						<Route path="full-mouth" element={<ImplantFullMouth />} />
						<Route path="dentures" element={<ImplantDentures />} />
					</Route>

					{/* Aesthetics */}
					<Route path="aesthetics" element={<Aesthetics />}>
						<Route index element={<AestheticWhitinyVeneers />} />
						<Route
							path="teeth-whitening"
							element={<AestheticTeethWhitening />}
						/>
						<Route path="gum-aesthetics" element={<AestheticGumAesthetics />} />
					</Route>

					{/* Treatments */}
					<Route path="treatments" element={<Treatments />}>
						<Route index element={<ToothDecayTreatment />} />
						<Route path="root-canal" element={<RootCanalTreatment />} />
						<Route
							path="wisdom-tooth-removal"
							element={<WisdomToothRemoval />}
						/>
						<Route path="tmj-treatment" element={<TMJtreatment />} />
						<Route
							path="gum-disease-treatment"
							element={<GumDiseaseTreatment />}
						/>
					</Route>

					{/* Community */}
					<Route path="community">
						<Route path="notice" element={<CommunityNotice />} />
						<Route path="notice/new" element={<CommunityNoticeForm />} />
						<Route path="with-star" element={<CommunityWithStars />} />
						<Route path="with-star/new" element={<CommunityWithStarForm />} />
						<Route path="with-star/:id" element={<CommunityWithStarDetail />} />
					</Route>

					{/* Login Page */}
					<Route path="login" element={<LoginPage />} />

					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
