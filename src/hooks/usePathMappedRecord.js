import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { buildPathIndex, matchPath } from "../utils/pathMatcher";

export function usePathMappedRecord(records, options = {}) {
	const { getPaths = (r) => r.paths ?? [], fallback = records?.[0] } = options;
	const { pathname } = useLocation();

	const index = useMemo(
		() => buildPathIndex(records, getPaths),
		[records, getPaths]
	);

	return useMemo(
		() => matchPath(index, pathname) ?? fallback,
		[index, pathname, fallback]
	);
}
