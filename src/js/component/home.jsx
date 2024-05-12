import React from "react";
import { Cards } from "./cards.jsx";
import { Nav } from "./nav.jsx";
import { Footer } from "./footer.jsx";
import {Jumbotron} from "./jumbotron.jsx"


//create your first component
export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				
				<Jumbotron />

					<div className="row text-center p-5">
						<Cards />
						<Cards />
						<Cards />
						<Cards />
					</div>
				
				<div>
					<Footer />
				</div>
			</div>
		);
	}
}