import { Link } from "react-router-dom";
import "./styles/DoctorProfileCard.css";

export default function DoctorProfileCard({ doctor }) {
	// console.log(doctor);
	return (
		<div className="doctor-profile-container">
			<div className="doctor-profile-image">
				<img src={doctor.imageCard} alt={doctor.name} />
			</div>
			<div className="doctor-profile-speciality">
				<h4>{doctor.specialtyName}</h4>
			</div>
			<div className="doctor-profile-info">
				<div className="doctor-profile-info-name">
					<h4>{doctor.role}</h4>
					<h3>{doctor.name}</h3>
				</div>
				<p>{doctor.description[0]}</p>
				<p>{doctor.description[1]}</p>
			</div>
			<div className="doctor-profile--info-button">
				<Link to={`/doctors/${doctor.id}`}>View profile</Link>
			</div>
		</div>
	);
}
