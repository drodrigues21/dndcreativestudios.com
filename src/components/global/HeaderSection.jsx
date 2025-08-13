import { headersDB } from "../../data/headersDB";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import "../styles/HeaderSection.css";

// Precompute path→header pairs from headersDB.paths for efficient lookup
const PATH_HEADER_PAIRS = headersDB.flatMap((header) =>
	(header.paths || []).map((p) => [p, header])
);

export default function HeaderSection() {
	const { pathname } = useLocation();

	const currentHeader = useMemo(() => {
		// Prefer the most specific (longest) matching path prefix
		const matched = [...PATH_HEADER_PAIRS]
			.sort((a, b) => b[0].length - a[0].length)
			.find(([path]) => pathname === path || pathname.startsWith(`${path}/`));
		return matched ? matched[1] : headersDB[0];
	}, [pathname]);

	return (
		<section className="header-section">
			<div className="header-section--container">
				<h3 className="header-section--title_eng">{currentHeader.titleEN}</h3>
				<h3 className="header-section--title_kr">{currentHeader.titleKR}</h3>
			</div>
		</section>
	);
}
