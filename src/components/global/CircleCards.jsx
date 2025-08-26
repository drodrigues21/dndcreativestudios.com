import { recommendedDB } from "../../data/recommendedDB";
import { usePathMappedRecord } from "../../hooks/usePathMappedRecord";
import "../styles/CircleCards.css";

export default function CircleCards() {
	const currentRecommended = usePathMappedRecord(recommendedDB, {
		fallback: recommendedDB[0],
	});

	const recommended = recommendedDB.filter(
		(item) => item.section === currentRecommended.section
	);

	return (
		<div className="recommend-cards--container">
			{recommended.map((item) => (
				<div className="recommend-card" key={item.id}>
					<div className="recommend-card--img-container">
						<img src={item.image} alt={item.title} />
					</div>
					<div className="recommend-card--content-container">
						<h3>{item.title}</h3>
						<p>{item.description1}</p>
						<p>{item.description2}</p>
					</div>
				</div>
			))}
		</div>
	);
}
