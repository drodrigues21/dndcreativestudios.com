export const squareCardsDB = [
	{
		id: 1,
		section: "braces",
		title: "메탈교정",
		image: "/assets/images/orthodontics/typesofbraces_metal.jpg",
		icon: "/assets/icons/squareCards/teeth01.png",
		advantage: "경제적이며, 교정력이 우수",
		disadvantage: "심미성이 떨어지며, 교정기간 상대적으로 김.",
		blackPill: "장점",
		whitePill: "단점",
		paths: ["/orthodontics"],
	},
	{
		id: 2,
		section: "braces",
		title: "클리피씨",
		image: "/assets/images/orthodontics/typesofbraces_clippyc.jpg",
		icon: "/assets/icons/squareCards/teeth01.png",
		advantage:
			"자가결찰 브라켓으로 교정 중 통증이 적음, 치아색과 비슷한 세라믹 재질로 심미성이 우수",
		disadvantage: "탈부착 불가능",
		blackPill: "장점",
		whitePill: "단점",
		paths: ["/orthodontics"],
	},
	{
		id: 3,
		section: "braces",
		title: "인비절라인",
		image: "/assets/images/orthodontics/typesofbraces_invisalign.jpg",
		icon: "/assets/icons/squareCards/teeth02.png",
		advantage:
			"투명한 재질로 교정장치 중 가장 심미성이 높으며 탈착이 가능해 구강관리에 용이, 적은 내원 횟수 및 짧은 치료기간",
		disadvantage: "높은 교정 치료 비용",
		blackPill: "장점",
		whitePill: "단점",
		paths: ["/orthodontics"],
	},
	{
		id: 4,
		section: "bonegraft",
		title: "자가골",
		subTitle: "환자 본인의 뼈 (ex. 사랑니,골융기)",
		image: "/assets/images/dental-bone-graft/dentalbonegraft_materials01.jpg",
		icon: "/assets/icons/squareCards/skull.png",
		advantage: "부작용 거의 없음, 회복력 우수",
		disadvantage:
			"수술 난이도가 높으며, 환자 뼈 상태에 따라 불가능한 경우도 있음.",
		blackPill: "장점",
		whitePill: "단점",
		paths: ["/implants/bone-graft"],
	},
	{
		id: 5,
		section: "bonegraft",
		title: "동종골",
		subTitle: "동일 종인 인간의 뼈 (시신의 뼈)",
		image: "/assets/images/dental-bone-graft/dentalbonegraft_materials02.jpg",
		icon: "/assets/icons/squareCards/skull.png",
		advantage: "부작용 거의 없음, 회복능력이 우수하며, 수술시간이 줄어듬",
		disadvantage: "면역 반응등의 우려가 있음 ",
		blackPill: "장점",
		whitePill: "단점",
		paths: ["/implants/bone-graft"],
	},
	{
		id: 6,
		section: "bonegraft",
		title: "합성골",
		subTitle: "인위적으로 만든 합성 뼈",
		image: "/assets/images/dental-bone-graft/dentalbonegraft_materials03.jpg",
		icon: "/assets/icons/squareCards/skull.png",
		advantage: "감염위험이나 알러지 반응 적음",
		disadvantage: "기존의 뼈 조직과 결합하는 속도가 느린편",
		blackPill: "장점",
		whitePill: "단점",
		paths: ["/implants/bone-graft"],
	},
	{
		id: 7,
		section: "bonegraft",
		title: "이종골",
		subTitle: "다른종의 뼈 (소 또는 돼지에게서 얻은 뼈)",
		image: "/assets/images/dental-bone-graft/dentalbonegraft_materials04.jpg",
		icon: "/assets/icons/squareCards/skull.png",
		advantage: "체내 흡수가 느려 장기적인 뼈 유지가 가능",
		disadvantage:
			"거부반응의 가능성이 있고, 동종골이나 자가골에 비해 체내 적응이 느린편",
		blackPill: "장점",
		whitePill: "단점",
		paths: ["/implants/bone-graft"],
	},
	{
		id: 8,
		section: "gumaesthetics",
		title: "잇몸 절제술",
		subTitle:
			"잇몸 일부를 절제해 잇몸 라인을 정리하고 치아노출을 개선하는 치주 치료방법",
		image: "/assets/images/gum-aesthetic/typesoftreatment01.jpg",
		icon: "/assets/icons/squareCards/scalp.png",
		advantage:
			"잇몸미관 개선을 원하는 경우, 염증으로 잇몸이 비대해진 경우, 염증으로 치주 포켓이 깊은 경우.",
		blackPill: "대상",
		paths: ["/gum-aesthetics"],
	},
	{
		id: 9,
		section: "gumaesthetics",
		title: "잇몸 이식술",
		subTitle:
			"잇몸이 부족한 부위에 건강한 잇몸 조직을 이식해 잇몸 재생과 치아 보호를 돕는 치료.",
		image: "/assets/images/gum-aesthetic/typesoftreatment02.jpg",
		icon: "/assets/icons/squareCards/plant.png",
		advantage:
			"잇몸 미관 개선을 원하는 경우, 뿌리가 노출된 경우, 질환으로 잇몸 손실이 심한 경우.",
		blackPill: "대상",
		paths: ["/gum-aesthetics"],
	},
	{
		id: 10,
		section: "gumaesthetics",
		title: "잇몸 미백술",
		subTitle:
			"착색되어 검게 변한 잇몸을 자연스러운 분홍빛 잇몸으로 되돌리는 시술입니다.",
		image: "/assets/images/gum-aesthetic/typesoftreatment03.jpg",
		icon: "/assets/icons/squareCards/stars.png",
		advantage: "잇몸 착색이 신경 쓰이는 경우.",
		blackPill: "대상",
		paths: ["/gum-aesthetics"],
	},
	{
		id: 11,
		section: "rootcanal",
		title: "층치로 인해 심해진 염증",
		image:
			"/assets/images/root-canal-treatment/rootcanaltreatment_indication01.jpg",
		advantage: "충치가 심해져 치아 뿌리나 치아 신경까지 염증이 발생 한 경우",
		blackPill: "Case 01",
		paths: ["/root-canal-treatment"],
	},
	{
		id: 12,
		section: "rootcanal",
		title: "넓고 깊은 충치",
		image:
			"/assets/images/root-canal-treatment/rootcanaltreatment_indication02.jpg",
		advantage: "충치가 심해져 충치 제거범위가 깊고 넓은경우",
		blackPill: "Case 02",
		paths: ["/root-canal-treatment"],
	},
	{
		id: 13,
		section: "rootcanal",
		title: "재발하는 통증",
		image:
			"/assets/images/root-canal-treatment/rootcanaltreatment_indication03.jpg",
		advantage: "이전에 신경치료에 실패하여  통증이 지속되거나 재발하는 경우",
		blackPill: "Case 03",
		paths: ["/root-canal-treatment"],
	},
	{
		id: 14,
		section: "wisdomtooth",
		image: "/assets/images/wisdomtoothremoval/wisdomtoothremoval_problem01.jpg",
		advantage:
			"관리가 어려워 쉽게 부식되는 사랑니는 사랑니 충치 뿐만 아니라 건강한 주변 치아까지 충치가 생길 수 있습니다.",
		blackPill: "problem 01",
		paths: ["/wisdom-tooth-removal"],
	},
	{
		id: 15,
		section: "wisdomtooth",
		image: "/assets/images/wisdomtoothremoval/wisdomtoothremoval_problem02.jpg",
		advantage:
			"음식물이 잘 끼어서 잇몸이 붓고 충치 및 치주염 발생 확률이 높아집니다.",
		blackPill: "problem 02",
		paths: ["/wisdom-tooth-removal"],
	},
	{
		id: 16,
		section: "wisdomtooth",
		image: "/assets/images/wisdomtoothremoval/wisdomtoothremoval_problem03.jpg",
		advantage:
			"임신 중인 여성은 사랑니 염증이 생기면 치료 받기가 곤란해 염증 증상이 더욱 심각해 질 수 있습니다.",
		blackPill: "problem 03",
		paths: ["/wisdom-tooth-removal"],
	},
	{
		id: 17,
		section: "wisdomtooth",
		image: "/assets/images/wisdomtoothremoval/wisdomtoothremoval_problem04.jpg",
		advantage:
			"치아가 나오는 공간이 부족한 경우 치열이 불규칙 해지며 통증을 유발할 수 있습니다.",
		blackPill: "problem 04",
		paths: ["/wisdom-tooth-removal"],
	},
	{
		id: 18,
		section: "tmj",
		image: "/assets/images/tmj-treatment/tmj_treatment_method01.jpg",
		advantage:
			"턱관절 주변에 보톡스를 주사해 근육의 긴장을 풀어주어 턱관절 통증을 완화시켜줍니다.",
		blackPill: "보톡스치료",
		paths: ["/tmj-treatment"],
	},
	{
		id: 19,
		section: "tmj",
		image: "/assets/images/tmj-treatment/tmj_treatment_method02.jpg",
		advantage:
			"진통제,신경 안정제, 근이완제 등의 약물을사용해 턱관절 통증을 완화시켜줍니다. ",
		blackPill: "약물치료",
		paths: ["/tmj-treatment"],
	},
	{
		id: 20,
		section: "tmj",
		image: "/assets/images/tmj-treatment/tmj_treatment_method03.jpg",
		advantage:
			"초음파, 경피성 전기신경 자극 등 전기자극을통해 근육을 이완시켜 통증을 완화시켜줍니다.",
		blackPill: "물리치료",
		paths: ["/tmj-treatment"],
	},
	{
		id: 21,
		section: "tmj",
		image: "/assets/images/tmj-treatment/tmj_treatment_method04.jpg",
		advantage:
			"스플린트를 장착해 이가 맞물릴 때의 위치를 바로 잡아주고,턱관절 과의 교합도  안정시켜줍니다.",
		blackPill: "스플린트(교합안전장치)",
		paths: ["/tmj-treatment"],
	},
	{
		id: 22,
		section: "gumdisease",
		image:
			"/assets/images/gum-disease-treatment/gumdiseasetreatment_cause01.jpg",
		advantage:
			"양치 부족 또는 잇몸을 자극하는 강한 칫솔질은 잇몸 건강을 악화시킵니다.",
		blackPill: "잘못된 칫솔질",
		paths: ["/gum-disease-treatment"],
	},
	{
		id: 23,
		section: "gumdisease",
		image:
			"/assets/images/gum-disease-treatment/gumdiseasetreatment_cause02.jpg",
		advantage:
			"면역력 저하와 염증 반응 증가로 치주질환이 더 쉽게 발생하거나 악화됩니다.",
		blackPill: "전신질환 (당뇨병 등)",
		paths: ["/gum-disease-treatment"],
	},
	{
		id: 24,
		section: "gumdisease",
		image:
			"/assets/images/gum-disease-treatment/gumdiseasetreatment_cause03.jpg",
		advantage:
			"입속 세균이 쌓여 생긴 끈적한 막과 굳은 침전물이 잇몸 염증을 유발합니다.",
		blackPill: "치태(플라그)와 치석",
		paths: ["/gum-disease-treatment"],
	},
	{
		id: 25,
		section: "gumdisease",
		image:
			"/assets/images/gum-disease-treatment/gumdiseasetreatment_cause04.jpg",
		advantage:
			"혈류를 감소시키고 면역 반응을 저하시켜 치주질환의 위험을 높입니다.",
		blackPill: "흡연",
		paths: ["/gum-disease-treatment"],
	},
];
