import { Outlet } from "react-router-dom";
import SideMenu from "../components/side-menu";

const OperationLayout = () => {
	return (
		<>
			<SideMenu />
			<Outlet />
		</>
	);
};

export default OperationLayout;
