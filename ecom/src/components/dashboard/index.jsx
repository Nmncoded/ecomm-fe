
import { useCallback } from "react";
import {
	Outlet
} from "react-router-dom";
import {
	Layout
} from 'antd';
import './index.scss'
import GlobalHeader from './common/header.jsx';
import GlobalSidebar from './common/sidebar.jsx';
import { useDispatch, useSelector } from "react-redux";
import { setSidebarCollapsed } from "../../features/private/slice";
const {  Content } = Layout;


const Dashboard = () => {
	const dispatch = useDispatch();
	const { isSidebarCollapsed } = useSelector((state) => state.privateData);

	const onCollapse = useCallback((value) => {
		dispatch(setSidebarCollapsed(value));
	}, []);

	return (
		<Layout>
			<GlobalHeader />
			<Layout >
				<GlobalSidebar collapsed={isSidebarCollapsed} onCollapse={onCollapse} />
				<Layout
					// className="site-layout"
					style={{
						marginLeft: isSidebarCollapsed ? 80 : 200,
						transition: ".3s",
					}}
				>
					<Content
						style={{
							minHeight: '100vh',
							// padding: '40px',
							// background: colorBgContainer,
						}}
					>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}

export default Dashboard; 