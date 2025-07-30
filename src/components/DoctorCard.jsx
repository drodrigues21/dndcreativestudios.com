import "./styles/DoctorCard.css";

export default function DoctorCard({ doctor }) {
	// console.log(doctor);
	return (
		<div className="doctor-profile-container">
			<div className="doctor-profile-image">
				<img src={doctor.imageCard} alt={doctor.name} />
			</div>
			<div className="doctor-profile-info">
				<div className="doctor-profile-info-name">
					<h3>{doctor.name}</h3>
					<h4>{doctor.role}</h4>
				</div>
				<p>{doctor.description[0]}</p>
				<p>{doctor.description[1]}</p>
			</div>
		</div>
	);
}
