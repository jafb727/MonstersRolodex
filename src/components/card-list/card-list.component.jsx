/**
 * Filename: card-list.component.js
 * Author: Jose A Felix
 * Description: Card list component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
import { Card } from "../card/card.component";

/** Stylesheet */
import "./card-list.styles.css";

// ----------------------------------------------------------------

// Main component
export const CardList = (props) => {
	// Rendering component
	return (
		<div className="card-list">
			{props.monstersList.map((monster) => (
				<Card key={monster.id} monster={monster} />
			))}
		</div>
	);
};

