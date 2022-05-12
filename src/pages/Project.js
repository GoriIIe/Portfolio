import Lien from "components/Lien";
import Navigation from "components/Navigation";
import React from "react";
import veville from "../assets/img/veville.png";

const Project = () => {
	return (
		<div className="project">
			<Lien />
			<Navigation />

			<main className="container">
				<article>
					<div>
						<h3>Veville</h3>
						<ul>
							<li>Laravel</li>
							<li>PHP</li>
							<li>MySQl</li>
						</ul>
						<p>Comparateur d'agence de location de vehicule qui affiche les vehicules disponible avec plusieur filtre (ville, agence, marque, prix).</p>
						<br></br>
						<p>Côté serveur, un CRUD pour chaque élements du site qui permet la modification des agences et des vehicules.</p>
						<br></br>
						<p>Un affichage des membres du site et des différentes commandes effectué par les clients.</p>

						<ul>
							<a href="#" target="_blank">
								Site
							</a>

							<a href="https://github.com/IliesRimani/Portfolio" target="_blank">
								Code Source
							</a>
						</ul>
					</div>

					<div className="img">
						<img src={veville} />
					</div>
				</article>
			</main>
		</div>
	);
};

export default Project;
