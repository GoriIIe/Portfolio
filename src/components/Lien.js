import React from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Lien = () => {
	return (
		<div className="lien">
			<a href="https://www.linkedin.com/in/ilies-rimani-5b40a2230/" target="_blank">
				<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
			</a>
			<a href="https://github.com/Gorillle" target="_blank">
				<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
			</a>
			<a href="https://drive.google.com/file/d/1ZfM3WMYajvDGQXQnFIzP8pjGDX8uXCXD/view?usp=sharing" target="_blank">
				<FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
			</a>
		</div>
	);
};

export default Lien;
