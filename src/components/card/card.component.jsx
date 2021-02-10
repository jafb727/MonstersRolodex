/**
 * Filename: card.component.js
 * Author: Jose A Felix
 * Description: Card component
 */

// ----------------------------------------------------------------
/** Components */

import React from "react";

// ----------------------------------------------------------------
/** Stylesheet */

//import "./card.styles.css";

// ----------------------------------------------------------------

// Main component
export const Card = ({ id, name, email }) => {
	return (
		<div className="card-container">
			<img
				alt="monster"
				src={`https://robohash.org/${id}?set=set2&size=180x180`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
			<p>{email}</p>
		</div>
	);
};
