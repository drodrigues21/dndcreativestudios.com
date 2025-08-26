import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname, hash } = useLocation();

	useLayoutEffect(() => {
		// If there's a hash, respect it (e.g., /about#team)
		if (hash) {
			const id = hash.slice(1);
			const el = document.getElementById(id);
			if (el) {
				// If you have a sticky header, ensure targets have scroll-margin-top in CSS (see below)
				el.scrollIntoView({ block: "start", behavior: "smooth" });
				return;
			}
		}

		// Otherwise, go to top (support window OR a scrollable <main>)
		const scroller =
			document.getElementById("content") ||
			document.scrollingElement ||
			document.documentElement;

		if ("scrollTo" in scroller) {
			scroller.scrollTo({ top: 0, left: 0, behavior: "auto" });
		} else {
			window.scrollTo({ top: 0, left: 0, behavior: "auto" });
		}

		// Move keyboard focus to main for a11y
		const main = document.getElementById("content");
		main?.focus({ preventScroll: true });
	}, [pathname, hash]);

	return null;
}
