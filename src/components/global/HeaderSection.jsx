import { headersDB } from "../../data/headersDB";
import { usePathMappedRecord } from "../../hooks/usePathMappedRecord";
import "../styles/HeaderSection.css";

export default function HeaderSection() {
	const currentHeader = usePathMappedRecord(headersDB, {
		fallback: headersDB[0],
	});

	return (
		<section className="header-section">
			<div className="header-section--container">
				<h3 className="header-section--title_eng">{currentHeader.titleEN}</h3>
				<h3 className="header-section--title_kr">{currentHeader.titleKR}</h3>
			</div>
		</section>
	);
}
