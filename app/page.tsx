"use client";
import styles from "./page.module.css";
import Project from "../components/project";
import Modal from "../components/learnMore";
import { useState } from "react";
import Projects from "@/components/Projects";
import Pharagraph from "@/components/Word";
import TextParallax from "@/components/textParallax";

export default function Home() {
	const projects = [
		{
			title: "Websites Development",
			src: "/projects/mediblob.png",
			color: "#000000",
		},
		{
			title: "Website Designing",
			src: "/projects/mediblob.png",
			color: "#8C8C8C",
		},
		{
			title: "Website Maintenance / Fixes",
			src: "/projects/mediblob.png",
			color: "#EFE8D3",
		},
		{
			title: "Website Redesign",
			src: "/projects/mediblob.png",
			color: "#706D63",
		},
		{
			title: "Landing Pages & Microsites",
			src: "/projects/mediblob.png",
			color: "#8C8C8C",
		},
	];

	const [modal, setModal] = useState({ active: false, index: 0 });

	return (
		<div className="w-full px-[7.5vw] py-[2vh]">
			{/* 	<div className="flex justify-evenly w-full mt-[5vh]">
				{Array.from({ length: 70 }).map((_, i) => (
					<div key={i} className="text-neutral-600 text-[1.5vh] mb-[3vh]">
						+
					</div>
				))}
			</div>
			<Pharagraph value="Im Yevheniia, a curious and creative developer _image1_ who has been coding for 3 years and loves turning ideas into real projects. _image2_ I enjoy experimenting with design, learning new tools, and building fun, interactive websites, _image3_ always looking for ways to grow and explore tech in my own style." />
			 */}
			<div className="flex justify-evenly w-full mt-[5vh]">
				{Array.from({ length: 70 }).map((_, i) => (
					<div key={i} className="text-neutral-600 text-[1.5vh]">
						+
					</div>
				))}
			</div>
			<h2 className="text-[5vh] mb-[3vh] mt-[2vh]">Projects</h2>
			<Projects />
			<div className="flex justify-evenly w-full mt-[7.5vh]">
				{Array.from({ length: 70 }).map((_, i) => (
					<div key={i} className="text-neutral-600 text-[1.5vh]">
						+
					</div>
				))}
			</div>
			<h2 className="text-[5vh] mb-[3vh] mt-[2vh]">Services</h2>
			<main className={styles.main}>
				<div className={styles.body}>
					{projects.map((project, index) => {
						return (
							<Project
								index={index}
								title={project.title}
								setModal={setModal}
								key={index}
							/>
						);
					})}
				</div>
				<Modal modal={modal} projects={projects} />
			</main>

			<div className="h-[7.5vh]"></div>
			<div className="flex justify-evenly w-full mb-[7vh]">
				{Array.from({ length: 70 }).map((_, i) => (
					<div key={i} className="text-neutral-600 text-[1.5vh]">
						+
					</div>
				))}
			</div>
			<TextParallax />
			<div className="h-[7.5vh]"></div>
		</div>
	);
}
