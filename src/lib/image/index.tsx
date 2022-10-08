interface PropsType {
	src: string;
	alt: string;
	fallback: string;
}

const Image = ({ src, alt, fallback }: PropsType) => {
	const addDefaultSource = (e: any) => {
		e.target.src = fallback;
	};
	return <img src={src} alt={alt} onError={(e) => addDefaultSource(e)} />;
};
export default Image;
