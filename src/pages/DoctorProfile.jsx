import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { doctorsDB } from "../data/doctorsDB";
import HeaderSection from "../components/global/HeaderSection";
import backArrow from "../assets/icons/backArrow.png";
import "./styles/DoctorProfile.css";

export default function DoctorProfile() {
	const { id } = useParams();
	const doctor = doctorsDB.find((d) => String(d.id) === id);

	if (!doctor) {
		return (
			<main className="page-doctor-profile--not-found">
				<Link to="/doctors-profile">
					<img src={backArrow} alt="go back to doctors profile button" />
				</Link>
				<h1>Doctor not found</h1>
			</main>
		);
	}

	return (
		<main className="page-doctor-profile">
			<div className="doctor-profile-header">
				<HeaderSection />
			</div>
			<div className="doctor-profile-hero--container">
				<div className="doctor-profile-hero--img">
					<div className="back-btn">
						<Link to="/doctors-profile">
							<img src={backArrow} alt="go back to doctors profile button" />
						</Link>
					</div>
					<img
						src={doctor.imageProfile || doctor.imageHome}
						alt={doctor.name}
					/>
				</div>
				<div className="doctor-profile-hero--info">
					<div className="doctor-profile-hero--info-specialty">
						<h3>{doctor.specialtyName}</h3>
					</div>
					<div className="doctor-profile-hero--info-title">
						<h1>{doctor.role}</h1>
						<h2>{doctor.name}</h2>
					</div>
					<div className="doctor-profile-hero--info-description">
						<p>"{doctor.description?.[0]}</p>
						<p>{doctor.description?.[1]}"</p>
					</div>
					<ul className="doctor-profile-hero--info-list">
						{doctor.career.map((career, index) => (
							<li key={index}>{career}</li>
						))}
					</ul>
				</div>
			</div>
		</main>
	);
}
