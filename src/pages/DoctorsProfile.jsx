import DoctorProfileCard from "../components/DoctorProfileCard";
import { doctorsDB } from "../data/doctorsDB";
import "./styles/DoctorsProfile.css";

export default function DoctorsProfile() {
	const prosthodontists = doctorsDB.filter(
		(doc) => doc.specialty === "Prosthodontist"
	);
	const orthodontists = doctorsDB.filter(
		(doc) => doc.specialty === "Orthodontist"
	);

	return (
		<div>
			<h1>Doctors Profile</h1>

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
	);
}
