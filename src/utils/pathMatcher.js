export function buildPathIndex(records, getPaths = (r) => r.paths ?? []) {
	const pathToRecordPairs = [];
	for (const record of records) {
		const recordPaths = getPaths(record) || [];
		for (const path of recordPaths) {
			if (typeof path === "string" && path.length > 0) {
				pathToRecordPairs.push([path, record]);
			}
		}
	}
	pathToRecordPairs.sort((a, b) => b[0].length - a[0].length); // longest path first
	return pathToRecordPairs;
}

export function matchPath(pathIndex, pathname) {
	const hit = pathIndex.find(
		([path]) => pathname === path || pathname.startsWith(`${path}/`)
	);
	return hit ? hit[1] : undefined;
}
