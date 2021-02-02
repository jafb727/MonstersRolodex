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
class SearchBox extends React.Component {
	// Constructor
	constructor(props) {
		super(props);

		this.searchBoxFocus = React.createRef();
	}

	// ----------------------------------------------------------------
	/** Lifecycle methods */

	// componentDidMount
	componentDidMount() {
		this.searchBoxFocus.current.focus();
	}

	// ----------------------------------------------------------------

	// Rendering component
	render() {
		return (
			<div className="search-box-container">
				<input
					className="search-box"
					ref={this.searchBoxFocus}
					type="search"
					placeholder={this.props.placeholder}
					onChange={this.props.handleChange}
				/>
			</div>
		);
	}
}

export default SearchBox;
