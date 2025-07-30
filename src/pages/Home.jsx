import { doctorsDB } from "../data/doctorsDB";
import HeroSection from "../components/HeroSection";
import ClientStats from "../components/ClientStats";
import HoursAndBreak from "../components/HoursAndBreak";
import "../pages/styles/Home.css";

export default function Home() {
	const doctorsHomePage = doctorsDB.filter((doctor) => doctor.imageHome);

	return (
		<main className="main-home-page">
			<HeroSection />
			<ClientStats />
			<HoursAndBreak />
			<div className="doctors-container">
				{doctorsHomePage.map((doctor) => (
					<div key={doctor.id}>
						<img src={doctor.imageHome} alt={doctor.name} />
						<h3>{doctor.name}</h3>
						<p>{doctor.role}</p>
						<p>{doctor.description[0]}</p>
						<p>{doctor.description[1]}</p>
					</div>
				))}
			</div>
		</main>
	);
}
