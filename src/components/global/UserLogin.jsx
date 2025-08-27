import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import ConsultationForm from "./ConsultationForm";
import OurPolicies from "./OurPolicies";
import MessegeComfirmation from "./MessegeComfirmation";
import "../styles/ContactLogin.css";
import "../styles/Modal.css";

export default function ContactLogin() {
	const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
	const [isPoliciesModalOpen, setIsPoliciesModalOpen] = useState(false);
	const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
	const { isAuthenticated, logout } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (
			isConsultationModalOpen ||
			isPoliciesModalOpen ||
			isConfirmationModalOpen
		) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isConsultationModalOpen, isPoliciesModalOpen, isConfirmationModalOpen]);

	const openConsultationModal = () => setIsConsultationModalOpen(true);
	const closeConsultationModal = () => setIsConsultationModalOpen(false);
	const openPoliciesModal = () => setIsPoliciesModalOpen(true);
	const closePoliciesModal = () => setIsPoliciesModalOpen(false);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setIsConsultationModalOpen(false);
		setIsConfirmationModalOpen(true);
	};

	const closeConfirmationModal = () => setIsConfirmationModalOpen(false);

	return (
		<>
			<div className="main-header--contact--login">
				<div className="main-header--contact">
					<button onClick={openConsultationModal}>빠른상담</button>
				</div>
				<div className="main-header--login">
					{isAuthenticated ? (
						<button
							onClick={() => {
								logout();
								navigate("/");
							}}
						>
							logout
						</button>
					) : (
						<Link to="/login">login</Link>
					)}
				</div>
			</div>

			{isConsultationModalOpen && (
				<div className="modal-overlay" onClick={closeConsultationModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<ConsultationForm
							onClose={closeConsultationModal}
							onPoliciesClick={openPoliciesModal}
							onSubmit={handleFormSubmit}
						/>
					</div>
				</div>
			)}

			{isPoliciesModalOpen && (
				<div className="modal-overlay" onClick={closePoliciesModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<OurPolicies onClose={closePoliciesModal} />
					</div>
				</div>
			)}

			{isConfirmationModalOpen && (
				<div className="modal-overlay" onClick={closeConfirmationModal}>
					<div
						className="modal-content confirmation-modal"
						onClick={(e) => e.stopPropagation()}
					>
						<MessegeComfirmation onConfirm={closeConfirmationModal} />
					</div>
				</div>
			)}
		</>
	);
}
