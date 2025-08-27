export const NAV_GROUPS = [
	{
		root: "/about-us",
		label: "치과소개",
		links: [
			{ to: "/about-us", label: "치과소개" },
			{ to: "/doctors-profile", label: "의료진 소개" },
			{ to: "/facilities", label: "시설및기공소" },
			{ to: "/devices", label: "장비소개" },
			{ to: "/hours-and-find-us-here", label: "진료시간 및 오시는길" },
		],
	},
	{
		root: "/orthodontics",
		label: "치아교정",
		links: [
			{ to: "/orthodontics", label: "치아교정 홈" },
			{ to: "/orthodontics/invisalign", label: "인비절라인" },
			{ to: "/orthodontics/clip-pyc", label: "클리피씨" },
		],
	},
	{
		root: "/implants",
		label: "임플란트",
		links: [
			{ to: "/implants", label: "임플란트 홈" },
			{ to: "/implants/bone-graft", label: "뼈이식 임플란트" },
			{ to: "/implants/full-mouth", label: "전체임플란트" },
			{ to: "/implants/dentures", label: "임플란트 틀니" },
		],
	},
	{
		root: "/aesthetics",
		label: "심미치료",
		links: [
			{ to: "/aesthetics", label: "라미네이트" },
			{ to: "/aesthetics/teeth-whitening", label: "치아미백" },
			{ to: "/aesthetics/gum-aesthetics", label: "잇몸성형" },
		],
	},
	{
		root: "/treatments",
		label: "일반진료",
		links: [
			{ to: "/treatments", label: "충치치료" },
			{ to: "/treatments/root-canal", label: "신경치료" },
			{ to: "/treatments/wisdom-tooth-removal", label: "사랑니 발치" },
			{ to: "/treatments/tmj-treatment", label: "턱관절치료" },
			{ to: "/treatments/gum-disease-treatment", label: "잇몸치료" },
		],
	},
	{
		root: "/community",
		label: "커뮤니티",
		links: [
			{ to: "/community/notice", label: "공지사항" },
			{ to: "/community/with-star", label: "with STAR" },
		],
	},
];

export function findGroupByPath(pathname) {
	return NAV_GROUPS.find((group) => {
		if (pathname.startsWith(group.root)) return true;
		return group.links.some(
			(link) => pathname === link.to || pathname.startsWith(`${link.to}/`)
		);
	});
}

export function getActiveLinkForPath(group, pathname) {
	if (!group) return null;
	return (
		group.links.find(
			(link) => pathname === link.to || pathname.startsWith(`${link.to}/`)
		) || group.links[0]
	);
}

export default NAV_GROUPS;
