import "../styles/BreadcrumbBar.css";
import { Link, useLocation } from "react-router-dom";
import { findGroupByPath, getActiveLinkForPath } from "../../data/navGroups";

export default function BreadcrumbBar() {
	const { pathname } = useLocation();
	const group = findGroupByPath(pathname);
	if (!group) return null;

	const active = getActiveLinkForPath(group, pathname);
	const groupTarget =
		group.links.find((l) => l.to === group.root) || group.links[0];

	return (
		<nav className="breadcrumb-bar" aria-label="Breadcrumb">
			<ol className="breadcrumb">
				<li className="crumb">
					<Link to={groupTarget.to}>{group.label}</Link>
				</li>
				{active && active.to !== groupTarget.to && (
					<li className="crumb current" aria-current="page">
						{active.label}
					</li>
				)}
			</ol>
		</nav>
	);
}
