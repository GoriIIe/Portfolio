import Lien from "components/Lien";
import Navigation from "components/Navigation";
import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm("service_xjtpjxn", "template_dlgo4rt", e.target, "XfFlLYbRRkmHod8P5").then(
			(result) => {
				console.log(result.text);
				alert("Message envoyé.");
			},
			(error) => {
				console.log(error.text);
				alert("Echec de l'envoie.");
			}
		);
		e.target.reset();
	}
	return (
		<div className="contact">
			<Lien />
			<Navigation />
			<div className="banner">
				<div className="container">
					<form onSubmit={sendEmail}>
						<input type="text" placeholder="Nom" name="nom" />
						<input type="email" placeholder="Email" name="email" />
						<input type="text" placeholder="Objet" name="objet" />
						<textarea placeholder="Message" name="message"></textarea>
						<input type="submit" className="submit" />
					</form>
				</div>
			</div>
		</div>
	);
}
