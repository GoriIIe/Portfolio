import Contact from "pages/Contact";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Home />} />
				<Route path="competences" element={<Skills />} />
				<Route path="projets" element={<Project />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;