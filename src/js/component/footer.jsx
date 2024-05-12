import React from "react";



//create your first component
export class Footer extends React.Component {
	render() {
		return (
			<footer className="py-5 bg-dark">
				<div className="container">
					<p className="m-0 text-center text-white">
						Copyright © Your Website 2024
					</p>
				</div>
			</footer>
		);
	}
}