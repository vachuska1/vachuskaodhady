import * as React from "react";
import "./Projects.less";
import "../MenuContent.less";
import { Carousel } from "react-responsive-carousel";
import "./ReactSlider.less";
import { useState, useEffect } from "react";

const images = [
	{ url: "./src/images/Carousel/RodinnyDumOneDest.jpg" },
	{ url: "./src/images/Carousel/RodinnyDumThreeDest.jpg" },
	{ url: "./src/images/Carousel/RodinnyDumFourDest.jpg" },
	{ url: "./src/images/Carousel/RodinnyDumFiveDest.jpg" },
	{ url: "./src/images/Carousel/RodinnyDumSixDest.jpg" },
];

const imagesMob = [
	{ url: "./src/images/Carousel/RodinnyDumOne.jpg" },
	{ url: "./src/images/Carousel/RodinnyDumThree.jpg" },
	{ url: "./src/images/Carousel/RodinnyDumFour.jpg" },
	{ url: "./src/images/Carousel/RodinnyDumFive.jpg" },
	{ url: "./src/images/Carousel/RodinnyDumSix.jpg" },
];

export const Projects = () => {
	const [destkop, setDestkop] = useState<boolean>(false);

	useEffect(() => {
		handleResizeViewport();
	}, []);
	window.addEventListener("resize", () => {
		handleResizeViewport();
	});

	const handleResizeViewport = () => {
		setDestkop(document.body.offsetWidth > 550);
	};

	return destkop ? (
		<div className="Projects">
			<div className="Projects__HeadText">Projekty</div>
			<div className="Projects__Text">Fotogalerie vybraných fotografií z dokončených odhadů</div>
			<Carousel showStatus={false} showThumbs={false} dynamicHeight={false} autoPlay={true} infiniteLoop={true}>
				{images.map((image) => {
					return (
						<div>
							<img src={image.url} />
						</div>
					);
				})}
			</Carousel>
		</div>
	) : (
		<div className="Projects">
			<div className="Projects__HeadText">Projekty</div>
			<div className="Projects__Text">Fotogalerie vybraných fotografií z dokončených odhadů</div>
			<Carousel showStatus={false} showThumbs={false} dynamicHeight={false} autoPlay={true} infiniteLoop={true}>
				{imagesMob.map((imageMob) => {
					return (
						<div>
							<img src={imageMob.url} />
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};
