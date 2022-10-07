import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

type PropsType = {
	children: React.ReactNode;
	href: string;
	classnames?: string;
};

const ActiveLink = ({ children, href, classnames }: PropsType) => {
	const [isActive, setIsActive] = useState(false);
	const currentURL = useLocation();

	useEffect(() => {
		setIsActive(currentURL.pathname === href);
	}, [currentURL]);

	return (
		<Link to={href} className={`${classnames} active-link ${isActive}`}>
			<span>{children}</span>
		</Link>
	);
};

export default ActiveLink;
