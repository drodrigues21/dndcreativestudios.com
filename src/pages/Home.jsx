import { doctorsDB } from "../data/doctorsDB";
import { Link } from "react-router-dom";
import HeroHomeSection from "../components/HeroHomeSection";
import ClientStats from "../components/ClientStats";
import HoursAndBreak from "../components/HoursAndBreak";
import DoctorHomeCard from "../components/DoctorHomeCard";
import BeforeAndAfterHome from "../components/BeforeAndAfterHome";
import Location from "../components/global/Location";
import "../pages/styles/Home.css";

export default function Home() {
	const doctorsHomePage = doctorsDB.filter((doctor) => doctor.imageHome);

	return (
		<main className="main-home-page">
			<HeroHomeSection />
			<ClientStats />
			<HoursAndBreak />
			<div className="doctors-container">
				<h2 className="doctors-container--title-en">Doctors</h2>
				<h3 className="doctors-container--title-kr">의료진 소개</h3>
				<div className="doctors-container--cards">
					{doctorsHomePage.map((doctor) => (
						<DoctorHomeCard key={doctor.id} doctor={doctor} />
					))}
				</div>
				<div className="doctors-container--button">
					<Link to="/doctors-profile">의료진 전체보기</Link>
				</div>
			</div>
			<div className="before-and-after-home--container">
				<h2 className="before-and-after-home--title-en">Before & After</h2>
				<h3 className="before-and-after-home--title-kr">치료 전후사진</h3>
				<div className="before-and-after-home--cards">
					<div className="before-and-after-home--card">
						<BeforeAndAfterHome />
					</div>
				</div>
				<div className="before-and-after-home--notice">
					<p>
						*본이미지는 치료의 이해를 위해 삽입되었으며, 모든치료는 개인차가
						있습니다.
					</p>
					<p>
						*동일한 조건에서 촬영되었으며, 보정이 이루어지지 않은 이미지입니다
					</p>
				</div>
			</div>
			<div id="location">
				<Location />
			</div>
		</main>
	);
}
