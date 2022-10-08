import styles from "./navbar.module.scss";
import { NavbarItems } from "./navbar-items";
import { ActiveLink } from "../../../lib";

const Navbar = () => {
	return (
		<header className={styles.container}>
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
		</header>
	);
};

export default Navbar;
