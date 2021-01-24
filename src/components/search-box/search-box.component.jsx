/**
 * Filename: search-box.component.js
 * Author: Jose A Felix
 * Description: Search box component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";

/** Stylesheet */
import "./search-box.styles.css";

// ----------------------------------------------------------------

// Main component
export const SearchBox = ({ placeholder, handleChange }) => {
	// Rendering component
	return (
		<div className="search-box-container">
			<input
				className="search-box"
				type="search"
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	);
};
