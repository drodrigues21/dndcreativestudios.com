import DoctorProfileCard from "../components/DoctorProfileCard";
import HeaderSection from "../components/global/HeaderSection";
import HeroSection from "../components/global/HeroSection";
import { usePathMappedRecord } from "../hooks/usePathMappedRecord";
import { doctorsDB } from "../data/doctorsDB";
import { heroSection } from "../data/HeroSection";
import "./styles/DoctorsProfile.css";

export default function DoctorsProfile() {
	const currentHeroSection = usePathMappedRecord(heroSection, {
		getPaths: (item) => item.routes || item.paths || [],
		fallback: heroSection[0],
	});

	const prosthodontists = doctorsDB.filter(
		(doc) => doc.specialty === "Prosthodontist"
	);
	const orthodontists = doctorsDB.filter(
		(doc) => doc.specialty === "Orthodontist"
	);

	return (
		<main className="page-doctorsprofile">
			<HeaderSection />
			<section className="page-doctorsprofile--hero">
				<HeroSection />
				<h1 className="doctors-profile-hero--title-kr">
					강남역에서만 10년. <span>고난이도 임상경험이 많은 전문의.</span>
				</h1>
			</section>
			<section className="page-doctorsprofile--section-1">
				<div className="page-doctorsprofile--section-1--content">
					<h2 className="page-doctorsprofile--section-1--title-en">Doctors</h2>
					<h2 className="page-doctorsprofile--section-1--title-kr">
						의료진 프로필
					</h2>
				</div>
			</section>

			<div className="doctors-profile-container">
				<div className="doctors-profile">
					<div className="doctors-profile--title">
						<h2>Prosthodontist</h2>
						<h3>보철과</h3>
					</div>
					<div className="doctors-profile-title--cards">
						{prosthodontists.map((doctor) => (
							<div className="doctors-profile--card" key={doctor.id}>
								<DoctorProfileCard doctor={doctor} />
							</div>
						))}
					</div>
				</div>

				<div className="doctors-profile">
					<div className="doctors-profile--title">
						<h2>Orthodontist</h2>
						<h3>교정과</h3>
					</div>
					<div className="doctors-profile-title--cards">
						{orthodontists.map((doctor) => (
							<div className="doctors-profile--card" key={doctor.id}>
								<DoctorProfileCard doctor={doctor} />
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
