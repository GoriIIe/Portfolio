import Lien from "components/Lien";
import Navigation from "components/Navigation";
import React from "react";

const Home = () => {
	return (
		<div className="home">
			<Lien />

			<main className="container">
				<h1>
					Bonjour, je m'apelle <span className="purple">Ilies.</span>
				</h1>
				<h1>Je suis un apprenti développeur web full stack.</h1>

				<Navigation />
			</main>
		</div>
	);
};

export default Home;
