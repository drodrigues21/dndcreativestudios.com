import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "../styles/Carousel.css";

/**
 * Generic, center-focused, draggable carousel.
 * - Renders the active item centered with N items on each side (wrap-around)
 * - Drag with mouse/touch (Pointer Events) to change slides
 */
export default function Carousel({
	items,
	initialId,
	getId = (item) => item?.id,
	visibleSideCount = 2,
	renderItem,
	className = "",
	autoPlayMs = 0,
	pauseOnHover = true,
}) {
	const total = items?.length ?? 0;
	const initialIndex = useMemo(() => {
		if (!total) return 0;
		if (initialId == null) return 0;
		const found = items.findIndex((it) => getId(it) === initialId);
		return found >= 0 ? found : 0;
	}, [items, total, initialId, getId]);

	const [activeIndex, setActiveIndex] = useState(initialIndex);
	useEffect(() => {
		setActiveIndex(initialIndex);
	}, [initialIndex]);

	const trackRef = useRef(null);
	const dragStateRef = useRef({ isDragging: false, startX: 0, deltaX: 0 });
	const [dragDelta, setDragDelta] = useState(0);
	const [isHover, setIsHover] = useState(false);

	const getCircularIndex = useCallback(
		(index) => {
			if (total === 0) return 0;
			return (index + total) % total;
		},
		[total]
	);

	const goToNext = useCallback(() => {
		setActiveIndex((prev) => getCircularIndex(prev + 1));
	}, [getCircularIndex]);

	const goToPrev = useCallback(() => {
		setActiveIndex((prev) => getCircularIndex(prev - 1));
	}, [getCircularIndex]);

	const getSlideDistance = useCallback(() => {
		const trackEl = trackRef.current;
		if (!trackEl) return 300;
		const itemEl = trackEl.querySelector(".carousel-item");
		const itemWidth = itemEl?.getBoundingClientRect?.().width ?? 300;
		const gapStr = getComputedStyle(trackEl).gap || "0px";
		const gap = parseFloat(gapStr) || 0;
		return itemWidth + gap;
	}, []);

	const animateStep = useCallback(
		(step) => {
			const distance = getSlideDistance();
			setDragDelta(step > 0 ? -distance : distance);
			// After the CSS transition, update index and reset offset
			const timeout = setTimeout(() => {
				setActiveIndex((prev) =>
					getCircularIndex(step > 0 ? prev + 1 : prev - 1)
				);
				setDragDelta(0);
			}, 300);

			return () => clearTimeout(timeout);
		},
		[getSlideDistance, getCircularIndex]
	);

	// Autoplay
	useEffect(() => {
		if (!autoPlayMs || autoPlayMs <= 0) return undefined;
		const id = setInterval(() => {
			if (dragStateRef.current.isDragging) return;
			if (pauseOnHover && isHover) return;
			animateStep(1);
		}, autoPlayMs);
		return () => clearInterval(id);
	}, [autoPlayMs, pauseOnHover, isHover, animateStep]);

	const onPointerDown = useCallback((e) => {
		const pointX = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
		dragStateRef.current = { isDragging: true, startX: pointX, deltaX: 0 };
		trackRef.current?.setPointerCapture?.(e.pointerId ?? 0);
	}, []);

	const onPointerMove = useCallback((e) => {
		if (!dragStateRef.current.isDragging) return;
		const pointX = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
		const delta = pointX - dragStateRef.current.startX;
		dragStateRef.current.deltaX = delta;
		setDragDelta(delta);
	}, []);

	const finishDrag = useCallback(() => {
		if (!dragStateRef.current.isDragging) return;
		const threshold = 50; // px to trigger slide
		const delta = dragStateRef.current.deltaX;
		dragStateRef.current = { isDragging: false, startX: 0, deltaX: 0 };
		setDragDelta(0);
		if (delta > threshold) {
			goToPrev();
		} else if (delta < -threshold) {
			goToNext();
		}
	}, [goToNext, goToPrev]);

	const visibleOffsets = useMemo(() => {
		const offsets = [];
		for (let n = -visibleSideCount; n <= visibleSideCount; n += 1) {
			offsets.push(n);
		}
		return offsets;
	}, [visibleSideCount]);

	const visibleItems = useMemo(() => {
		if (!Array.isArray(items) || total === 0) return [];
		return visibleOffsets.map((offset) => {
			const index = getCircularIndex(activeIndex + offset);
			const keyId = getId(items[index]);
			const item = items[index];
			return {
				key: `${keyId}-${offset}`,
				item,
				offset,
				isCenter: offset === 0,
			};
		});
	}, [items, total, visibleOffsets, activeIndex, getCircularIndex, getId]);

	return (
		<div className={`carousel ${className}`}>
			<div
				ref={trackRef}
				className="carousel-track"
				onPointerDown={onPointerDown}
				onPointerMove={onPointerMove}
				onPointerUp={finishDrag}
				onPointerCancel={finishDrag}
				onTouchStart={onPointerDown}
				onTouchMove={onPointerMove}
				onTouchEnd={finishDrag}
				onMouseEnter={pauseOnHover ? () => setIsHover(true) : undefined}
				onMouseLeave={pauseOnHover ? () => setIsHover(false) : undefined}
				role="listbox"
				aria-label="carousel"
			>
				{visibleItems.map(({ key, item, isCenter, offset }) => (
					<div
						key={key}
						className={`carousel-item${isCenter ? " is-center" : ""}`}
						role="option"
						aria-selected={isCenter}
						style={{
							// Position items relative to the center without moving the whole track
							// dragDelta temporarily offsets items during manual drag/auto animation
							"--x": `calc(${offset} * (var(--card-width, 40rem) + var(--gap, 2rem)) + ${dragDelta}px)`,
						}}
					>
						{renderItem ? renderItem(item, isCenter) : null}
					</div>
				))}
			</div>
		</div>
	);
}
