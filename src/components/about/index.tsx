import styles from "./about.module.scss";

const About = () => {
	return (
		<div className={styles.container}>
			<span className={styles.brand}>Drip Music</span> is a music streaming
			website created as a college project.
			<br />
			<br />
			<span className={styles.disclaimer}>Disclaimer</span> - Drip Music{" "}
			<span className={styles.bold}>does not own</span> any of the song listed
			in the website. If you are the original owner of any song listed in the
			website and want to take it down, email me at{" "}
			<span className={styles.email}>inquiries.brandname@gmail.com</span>. You
			are requested to not copyright the website down as it may take a lot of
			resources to lift it up again. Thankyou!
		</div>
	);
};

export default About;
