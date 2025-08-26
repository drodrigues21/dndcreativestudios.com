import { benefitsDB } from "../../data/benefitsAndSymptomsDB";
import { usePathMappedRecord } from "../../hooks/usePathMappedRecord";
import "../styles/BenefitsAndSymptoms.css";

export default function BenefitsAndSymptoms() {
	const currentBenefitsAndSymptoms = usePathMappedRecord(benefitsDB, {
		fallback: benefitsDB[0],
	});

	const benefits = benefitsDB.filter(
		(item) => item.section === currentBenefitsAndSymptoms.section
	);

	return (
		<div className="benefits-cards--container">
			{benefits.map((item) => (
				<div className="benefits-card" key={item.id}>
					<div className="benefits-card--img">
						<img src={item.icon} alt={item.title} />
					</div>
					<div className="benefits-card--content">
						<h3 className="benefits-card--title">{item.title}</h3>
						<p className="benefits-card--description">{item.description1}</p>
						{item.description2 && (
							<p className="benefits-card--description">{item.description2}</p>
						)}
					</div>
				</div>
			))}
		</div>
	);
}
