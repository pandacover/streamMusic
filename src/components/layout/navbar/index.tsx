import styles from "./navbar.module.scss";
import { NavbarItems } from "./navbar-items";
import { ActiveLink, SearchContext } from "../../../lib";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
	const { setSearchParams } = useContext(SearchContext);
	const currentLocation = useLocation();

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.navbarContainer}>
					<div className={styles.brandContainer}>
						<span>Drip Music</span>
					</div>
					<nav className={styles.navContainer}>
						<ul className={styles.navbar}>
							{NavbarItems.map(({ id, name, href }) => (
								<li key={id}>
									<ActiveLink href={href}>{name}</ActiveLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
				{currentLocation.pathname !== "/about" && (
					<div className={styles.searchContainer}>
						<input
							type='text'
							placeholder='Search for Artist or Songs'
							onChange={(e) => setSearchParams(e.currentTarget.value)}
						/>
					</div>
				)}
			</div>
		</header>
	);
};

export default Navbar;
