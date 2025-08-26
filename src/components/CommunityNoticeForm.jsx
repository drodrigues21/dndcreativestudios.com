import removeIcon from "../assets/icons/close.png";
import "./styles/CommunityNoticeForm.css";

export default function CommunityNoticeForm() {
	return (
		<main className="notice-form--wrapper">
			<h1 className="section-title notice-form--title">
				Notice <span>공지사항</span>
			</h1>
			<form className="notice-form" onSubmit={(e) => e.preventDefault()}>
				<div className="select-radio--container">
					<div className="select-radio--item select-wrapper">
						<select name="notice-type" id="notice-type">
							<option value="notice">공지</option>
							<option value="event">이벤트</option>
						</select>
					</div>
					<div className="select-radio--item select-radio--wrapper-mobile">
						<div className="select-radio--item-wrapper">
							<input type="radio" name="notice-type" id="notice-type-1" />
							<label htmlFor="notice-type-1">공개</label>
						</div>
						<div className="select-radio--item-wrapper">
							<input type="radio" name="notice-type" id="notice-type-1" />
							<label htmlFor="notice-type-1">비공개</label>
						</div>
					</div>
				</div>
				<div className="notice-form-content--container">
					<div className="select-radio--item select-radio--wrapper-desktop">
						<div className="select-radio--title">
							<h2>공개여부</h2>
						</div>
						<div className="select-radios--container">
							<div className="select-radio--item-wrapper">
								<input type="radio" name="notice-type" id="notice-type-1" />
								<label htmlFor="notice-type-1">공개</label>
							</div>
							<div className="select-radio--item-wrapper">
								<input type="radio" name="notice-type" id="notice-type-1" />
								<label htmlFor="notice-type-1">비공개</label>
							</div>
						</div>
					</div>
					<div className="notice-form-content--item">
						<label htmlFor="notice-title">제목</label>
						<input
							type="text"
							name="notice-title"
							id="notice-title"
							placeholder="제목"
						/>
					</div>
					<div className="notice-form-content--item">
						<label htmlFor="notice-title">본문</label>
						<textarea
							name="notice-content"
							id="notice-content"
							placeholder="내용을 입력하세요"
						></textarea>
					</div>
					<div className="notice-form--file">
						<label className="notice-file-mobile" htmlFor="notice-file">
							<input type="file" name="notice-file" id="notice-file" />
							<span>+</span>
						</label>
						<div className="notice-file-desktop">
							<label htmlFor="notice-file">첨부파일</label>
							<input type="file" name="notice-file" id="notice-file" />
							<span>+</span>
						</div>
					</div>
				</div>
				<div className="notice-file--added">
					<div className="notice-file--added-item">
						<p>event_discountsale_01.jpg</p>
						<span className="notice-file-remove--button">
							<img src={removeIcon} alt="remove file" />
						</span>
					</div>
					<div className="notice-file--added-item">
						<p>event_discountsale_02.jpg</p>
						<span className="notice-file-remove--button">
							<img src={removeIcon} alt="remove file" />
						</span>
					</div>
				</div>
				<div className="notice-form-content--button">
					<input type="submit" value="등록하기" />
				</div>
			</form>
		</main>
	);
}
