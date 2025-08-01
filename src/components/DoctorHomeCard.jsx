import "./styles/DoctorHomeCard.css";

export default function DoctorHomeCard({ doctor }) {
	return (
		<div className="doctor-home-card--container">
			<div className="doctor-home-card--image">
				<img src={doctor.imageHome} alt={doctor.name} />
			</div>
			<div className="doctor-home-card--info">
				<div className="doctor-home-card--info-name">
					<h3>{doctor.name}</h3>
					<h4>{doctor.role}</h4>
				</div>
				<p>{doctor.description[0]}</p>
				<p>{doctor.description[1]}</p>
			</div>
			<div className="doctor-home-card--info-button">
				<a href="#">View profile</a>
			</div>
		</div>
	);
}
