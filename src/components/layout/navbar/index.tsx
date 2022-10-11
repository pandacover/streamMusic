import styles from "./navbar.module.scss";
import { NavbarItems } from "./navbar-items";
import { ActiveLink, SearchContext } from "../../../lib";
import {
	CgMenuMotion as MenuIconOpen,
	CgClose as MenuIconClose,
} from "react-icons/cg";
import { useState, useContext } from "react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setIsMenuOpen(!isMenuOpen);
	};
	const { setSearchParams } = useContext(SearchContext);

	return (
		<header className={styles.container}>
			<div className={styles.brandContainer}>
				<span>Drip Music</span>
			</div>
			<div className={styles.searchContainer}>
				<input
					type='text'
					placeholder='Search for Artist or Songs'
					onChange={(e) => setSearchParams(e.currentTarget.value)}
				/>
			</div>
			<div className={styles.menuOpen}>
				<button onClick={(e) => toggleMenu(e)}>
					<MenuIconOpen />
				</button>
			</div>
			<nav
				className={`${styles.navContainer} ${styles[isMenuOpen.toString()]}`}
			>
				<ul className={styles.navbar}>
					<li className={styles.menuClose}>
						<button onClick={(e) => toggleMenu(e)}>
							<MenuIconClose />
						</button>
					</li>
					{NavbarItems.map(({ id, name, href }) => (
						<li key={id}>
							<ActiveLink href={href}>{name}</ActiveLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
