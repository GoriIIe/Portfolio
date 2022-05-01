import Lien from "components/Lien";
import Navigation from "components/Navigation";
import React from "react";
import html from "../assets/img/html5.png";
import css from "../assets/img/css.png";
import js from "../assets/img/javascript.png";
import node from "../assets/img/node.png";
import php from "../assets/img/php.png";
import react from "../assets/img/react.png";

const Skills = () => {
	return (
		<div className="skills">
			<Lien />
			<Navigation />

			<div className="banner">
				<main className="container">
					<div className="front">
						<h2>Front End</h2>
						<ul>
							<li>
								<img src={html} />
								<p>HTML5</p>
							</li>
							<li>
								<img src={css} />
								<p>CSS3</p>
							</li>
							<li>
								<img src={js} />
								<p>Javascript</p>
							</li>
							<li>
								<img src={react} />
								<p>React</p>
							</li>
						</ul>
					</div>

					<div className="back">
						<h2>Back End</h2>
						<ul>
							<li>
								<img src={node} />
								<p>Node</p>
							</li>
							<li>
								<img src={php} />
								<p>PHP</p>
							</li>
						</ul>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Skills;
