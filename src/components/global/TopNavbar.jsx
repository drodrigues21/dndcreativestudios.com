import { useMemo, useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	NAV_GROUPS,
	findGroupByPath,
	getActiveLinkForPath,
} from "../../data/navGroups";
// import upArrow from "../../assets/icons/arrow-up.svg";
// import downArrow from "../../assets/icons/arrow-down.svg";
// import backArrow from "../../assets/icons/backArrow.png";
import "../styles/TopNavbar.css";

const GROUPS = NAV_GROUPS;

export default function TopNavbar() {
	const { pathname } = useLocation();
	// const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const rootRef = useRef(null);

	const group = useMemo(() => findGroupByPath(pathname), [pathname]);

	const active = useMemo(
		() => (group ? getActiveLinkForPath(group, pathname) : null),
		[group, pathname]
	);

	// Close when clicking/touching outside the component
	// useEffect(() => {
	// 	function handlePointerDown(e) {
	// 		if (!open) return;
	// 		const container = rootRef.current;
	// 		if (!container) return;
	// 		if (container.contains(e.target)) return;
	// 		setOpen(false);
	// 	}

	// 	document.addEventListener("mousedown", handlePointerDown);
	// 	document.addEventListener("touchstart", handlePointerDown, {
	// 		passive: true,
	// 	});
	// 	return () => {
	// 		document.removeEventListener("mousedown", handlePointerDown);
	// 		document.removeEventListener("touchstart", handlePointerDown);
	// 	};
	// }, [open]);

	// Close on route change (e.g., history back/forward or programmatic nav)
	// useEffect(() => {
	// 	setOpen(false);
	// }, [pathname]);

	// Ensure hooks run consistently before any conditional return
	if (!group || !active) return null;

	return (
		<>
			{/* <div
				ref={rootRef}
				className="topnav-mobile"
				aria-label={`${group.label} navigation`}
			>
				<button
					type="button"
					className="topnav-toggle"
					aria-expanded={open}
					onClick={() => setOpen((v) => !v)}
				>
					<a
						href="#"
						className="topnav-toggle--icon"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setOpen(false);
							if (window.history.length > 2) {
								navigate(-1);
							} else {
								navigate("/");
							}
						}}
						onTouchStart={() => setOpen(false)}
					>
						<img src={backArrow} alt="back" />
					</a>
					<span className="topnav-toggle--label">{active.label}</span>
					<span className="topnav-toggle--chev" aria-hidden>
						<img src={open ? upArrow : downArrow} alt="arrow" />
					</span>
				</button>
				{open && (
					<nav className="topnav-dropdown">
						{group.links.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								className={
									pathname === link.to
										? "dropdown-link active"
										: "dropdown-link"
								}
								onClick={() => setOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</nav>
				)}
			</div> */}
			{/* Pill list under the dropdown (sticky) */}
			<div className="topnav-pills-sticky">
				<div className="topnav-pills">
					{group.links.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className={pathname === link.to ? "pill active" : "pill"}
							onClick={() => setOpen(false)}
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
