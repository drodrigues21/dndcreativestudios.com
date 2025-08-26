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
						<h4 className="stages-card--stage">{stage.stage}</h4>
					</div>
					<div className="stages-card--img-container">
						<img src={stage.image} alt={stage.stage} />
					</div>
					<div className="stages-card--description-container">
						{stage.title && (
							<h3 className="stages-card--title">{stage.title}</h3>
						)}
						<p className="stages-card--description-1">{stage.description1}</p>
						{stage.description2 && (
							<p className="stages-card--description-2">{stage.description2}</p>
						)}
						{stage.description3 && (
							<p className="stages-card--description-3">{stage.description3}</p>
						)}
						{stage.description4 && (
							<p className="stages-card--description-4">{stage.description4}</p>
						)}
						{stage.description5 && (
							<p className="stages-card--description-5">{stage.description5}</p>
						)}
					</div>
				</div>
			))}
		</div>
	);
}
