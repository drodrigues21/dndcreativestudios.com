import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	NAV_GROUPS,
	findGroupByPath,
	getActiveLinkForPath,
} from "../../data/navGroups";
import upArrow from "../../assets/icons/arrow-up.svg";
import downArrow from "../../assets/icons/arrow-down.svg";
import backArrow from "../../assets/icons/backArrow.png";
import "../styles/TopNavbar.css";

const GROUPS = NAV_GROUPS;

export default function TopNavbar() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);

	const group = useMemo(() => findGroupByPath(pathname), [pathname]);

	if (!group) return null;

	const active = getActiveLinkForPath(group, pathname);

	return (
		<div className="topnav-mobile" aria-label={`${group.label} navigation`}>
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
						if (window.history.length > 2) {
							navigate(-1);
						} else {
							navigate("/");
						}
					}}
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
								pathname === link.to ? "dropdown-link active" : "dropdown-link"
							}
							onClick={() => setOpen(false)}
							onTouchStart={() => setOpen(false)}
						>
							{link.label}
						</Link>
					))}
				</nav>
			)}

			{/* Pill list under the dropdown */}
			<div className="topnav-pills">
				{group.links.map((link) => (
					<Link
						key={link.to}
						to={link.to}
						className={pathname === link.to ? "pill active" : "pill"}
						onClick={() => setOpen(false)}
						onTouchStart={() => setOpen(false)}
					>
						{link.label}
					</Link>
				))}
			</div>
		</div>
	);
}
