import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="navigation">
			<ul>
				<NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>
						<FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
					</li>
				</NavLink>
				<NavLink to="/competences" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>Compétences</li>
				</NavLink>
				<NavLink to="/projets" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>Projets</li>
				</NavLink>				
				<NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>Contact</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Navigation;
