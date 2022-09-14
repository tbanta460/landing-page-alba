import React from 'react';
import { Routes, Route} from "react-router-dom";

// Element
import {Home, Login, Profile} from "../../pages";
// Component

const Routess = () => {
	return (
		<>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/profile/:token" element={<Profile />} />
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Home />} />
				</Routes>
		</>
	)
}

export default Routess