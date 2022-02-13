import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthContext, { authValue } from "./context/auth";
import OperationLayout from "./layout/OperationLayout";
import Login from "./pages/login";
import DashBoard from "./pages/operation/dashboard";

import "./utils/wrapAxios";

const appWrapper: React.CSSProperties = {
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
};

function App() {
	return (
		<div style={appWrapper}>
			<AuthContext.Provider value={authValue}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Navigate to="/operation/dashboard" />} />
						<Route path="/login" element={<Login />} />
						<Route path="operation" element={<OperationLayout />}>
							<Route path="dashboard" element={<DashBoard />} />
							<Route path="*" element={<Navigate to="dashboard" />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
