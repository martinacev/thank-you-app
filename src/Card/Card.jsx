import React, { useState } from "react";
import classes from "./Card.module.css";
import PRODUCT_DATA from "../Data/Data";
import SvgComponent from "../Components/SvgComponent";

const Card = () => {
	const [selectedItems, setSelectedItems] = useState(0);
	const [showThanks, setShowThanks] = useState(false);
	const [showContent, setShowContent] = useState(true);

	const handleButtonClick = (number) => {
		setSelectedItems(number);
	};

	const handleSubmit = () => {
		if (selectedItems > 0) {
			setShowThanks(true);
			setShowContent(false);
		}
	};

	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				{showContent && (
					<>
						<div className={classes.star}>
							<svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
								<path
									d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
									fill="#FC7614"
								/>
							</svg>
						</div>
						<h3 className={classes.title}>{PRODUCT_DATA.title}</h3>
						<p className={classes.text}>{PRODUCT_DATA.text}</p>
						<div className={classes.buttons}>
							{[1, 2, 3, 4, 5].map((number) => (
								<button
									key={number}
									className={`${classes.circle} ${
										selectedItems === number ? classes.selectedCircle : ""
									}`}
									onClick={() => handleButtonClick(number)}
								>
									{number}
								</button>
							))}
						</div>
						<button onClick={handleSubmit} className={classes.btn}>
							SUBMIT
						</button>
					</>
				)}

				{showThanks && (
					<div className={classes.card}>
						<div className={classes.mobile}>
							<SvgComponent />
						</div>
						<div className={classes.wrap}>
							<span className={classes.selected}>You selected {selectedItems} out of 5</span>
						</div>
						<div className={classes.thankyou}>
							<h3>Thank you!</h3>
							<p className={classes.description}>{PRODUCT_DATA.description}</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;
