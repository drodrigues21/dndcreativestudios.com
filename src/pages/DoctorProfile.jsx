import { useParams } from "react-router-dom";
import { doctorsDB } from "../data/doctorsDB";

export default function DoctorProfile() {
	const { id } = useParams();
	const doctor = doctorsDB.find((d) => String(d.id) === id);

	if (!doctor) {
		return (
			<main>
				<h1>Doctor not found</h1>
			</main>
		);
	}

	return (
		<main className="page-doctor-profile">
			<h1>{doctor.name}</h1>
			<h2>{doctor.role}</h2>
			<p>{doctor.description?.[0]}</p>
			<p>{doctor.description?.[1]}</p>
			<div>
				<img src={doctor.imageCard || doctor.imageHome} alt={doctor.name} />
			</div>
		</main>
	);
}
