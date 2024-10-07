import React from "react";
import { SkillIcons } from "./SkillIcons";
import Marquee from "react-fast-marquee";

const HomePage = () => {
	return (
		<div className="min-h-screen w-[90vw] md:w-[75vw] xl:w-[60vw] mx-auto pt-8 xl:pt-12">
			<div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-12 border-red-200/50">
				<div className="flex min-w-[15rem] xl:min-w-[16rem] 2xl:min-w-[18rem] items-center md:items-start justify-center md:justify-start pt-8 md:pt-0">
					<img
						src="/me.png"
						className="rounded-full w-[15rem] 2xl:w-[17rem] h-[15rem] 2xl:h-[17rem] object-cover"
						alt=""
					/>
				</div>
				<div className="flex flex-col justify-center relative items-start min-h-[15rem]">
					<div className="px-8 md:px-0 flex flex-col justify-center my-auto relative">
						<div className="flex gap-2">
							<p className="bg-neutral-800 px-3 md:px-6 py-1 rounded-full text-xs md:text-sm text-white">
								Web Developer
							</p>
							<p className="bg-neutral-800 px-3 md:px-6 py-1 rounded-full text-xs md:text-sm text-white">
								Fullstack Developer
							</p>
						</div>
						<h1 className="text-[3rem] baloo text-white">Yevheniia Simaka</h1>
						<p className="text-neutral-200 mb-4">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</p>
						<SkillIcons />
					</div>
				</div>
			</div>
			<Marquee className="mt-10">
				<img
					src="https://skillicons.dev/icons?i=html,css,js,ts,py,materialui,tailwind,bootstrap,sass,mongodb,nodejs,express,react,nextjs,prisma"
					alt=""
					width={1000}
					className="mr-2"
				/>
				{/* <img
					src="https://skillicons.dev/icons?i=html,css,js,ts,py,materialui,tailwind,bootstrap,sass,mongodb,nodejs,express,react,nextjs,prisma"
					alt=""
					width={1100}
					className="mr-2"
				/> */}
			</Marquee>
		</div>
	);
};

export default HomePage;
