import "@/assets/styles/global.css";

export const metadata = {
	title: "PropertyPluse | Find The Perfect Property ",
};

const MainLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<div>{children}</div>
			</body>
		</html>
	);
};

export default MainLayout;
