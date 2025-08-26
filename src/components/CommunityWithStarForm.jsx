import "./styles/CommunityWithStarForm.css";

export default function CommunityWithStarForm() {
	return (
		<main className="withstar-form--container">
			<h1 className="section-title withstar-form--title">
				with STAR <span>스타가 선택한 화이트드림치과</span>
			</h1>
			<form
				className="withstar-form--form"
				onSubmit={(e) => e.preventDefault()}
			>
				<div className="withstar-form--content">
					<div className="withstar-form--image-wrapper">
						<label
							className="withstar-form--image-label"
							htmlFor="withstar-form--image"
						>
							<input
								type="file"
								name="withstar-form--image"
								id="withstar-form--image"
							/>
							<span>+</span>
						</label>
					</div>
					<div className="withstar-form--inputs">
						<div className="withstar-form--input-wrapper">
							<input
								type="text"
								name="withstar-form--name"
								id="withstar-form--name"
								placeholder="이름"
							/>
						</div>
						<div className="withstar-form--input-wrapper">
							<textarea
								name="withstar-form--content"
								id="withstar-form--content"
								placeholder="내용을 입력하세요"
							></textarea>
						</div>
					</div>
				</div>
				<div className="withstar-form--button">
					<input type="button" value="등록하기" />
				</div>
			</form>
		</main>
	);
}
