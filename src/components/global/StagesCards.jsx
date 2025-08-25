import { stagesDB } from "../../data/stagesDB";
import { usePathMappedRecord } from "../../hooks/usePathMappedRecord";
import "../../components/styles/StagesCards.css";

export default function StagesCards() {
	const currentStages = usePathMappedRecord(stagesDB, {
		fallback: stagesDB[0],
	});

	const stages = stagesDB.filter(
		(item) => item.section === currentStages.section
	);

	return (
		<div className="stages-cards--container">
			{stages.map((stage) => (
				<div className="stages-card" key={stage.id}>
					<div className="stages-card--pill">
						<h3 className="stages-card--title">{stage.stage}</h3>
					</div>
					<div className="stages-card--img-container">
						<img src={stage.image} alt={stage.title} />
					</div>
					<div className="stages-card--description-container">
						<p className="stages-card--description-1">{stage.description1}</p>
						<p className="stages-card--description-2">{stage.description2}</p>
					</div>
				</div>
			))}
		</div>
	);
}
