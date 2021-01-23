/**
 * Filename: card.component.js
 * Author: Jose A Felix
 * Description: Card component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";

/** Stylesheet */
import "./card.styles.css";

// ----------------------------------------------------------------

// Main component
export const Card = (props) => {
	return (
		<div className="card-container">
			<img
				alt="monster"
				src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
			/>
			<h2>{props.monster.name}</h2>
			<p>{props.monster.email}</p>
		</div>
	);
};
