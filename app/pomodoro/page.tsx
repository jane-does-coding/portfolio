import Link from "next/link";
import React from "react";
import { FaBehance, FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import { PiLinkBold } from "react-icons/pi";

const Page = () => {
	return (
		<div className="w-full px-[7.5vw] pt-[4vh] pb-[5vh]">
			<div className="flex flex-col">
				<p className="text-center text-[2vh]">March 10, 2024</p>
				<h1 className="text-[7vh] text-center ">Pomodoro</h1>
				<div className="flex gap-[1.5vw] items-center justify-center w-full mb-[4vh]">
					<img
						src="/projects/pomodoro.png"
						className="h-[5vh] aspect-[1] object-cover border-[1px] border-neutral-400 rounded-full"
						alt=""
					/>
					<p className="text-[2.5vh]">Jane Doe</p>
				</div>
			</div>
			<img
				src="/projects/pomodoro.png"
				className="border-[1px] border-neutral-500 rounded-[1.5vh] shadow-md"
				alt=""
			/>
			<div className="flex w-full gap-[1vw] mt-[4vh] pt-[3vh] border-t-[1px] border-neutral-300">
				<Link
					href="https://github.com/jane-does-coding/Productivity-App"
					className="w-full bg-neutral-800 text-white items-center justify-center py-[1vh] text-[2vh] rounded-[1.5vh] flex gap-[1vw]"
				>
					<FaGithub /> Github
				</Link>
				<Link
					href="/"
					className="w-full bg-neutral-800 text-white items-center justify-center py-[1vh] text-[2vh] rounded-[1.5vh] flex gap-[1vw]"
				>
					<FaDribbble /> Dribbble
				</Link>
				<Link
					href="/"
					className="w-full bg-neutral-800 text-white items-center justify-center py-[1vh] text-[2vh] rounded-[1.5vh] flex gap-[1vw]"
				>
					<PiLinkBold /> Demo
				</Link>
			</div>
			<div className="flex flex-col">
				<h1 className="text-[5vh] text-left mt-[4vh] mb-[0.5vh]">
					Description
				</h1>
				<div className="flex justify-evenly w-full">
					{Array.from({ length: 70 }).map((_, i) => (
						<div key={i} className="text-neutral-600 text-[1.5vh]">
							+
						</div>
					))}
				</div>
				<p className="text-[2.5vh] mt-[2vh] tracking-[0.5px] leading-[4vh]">
					From the sleek design to the lightning-fast performance, every line of
					code was a step closer to perfection. With Next.js paving the way,
					Tailwind making things look slick, and TypeScript keeping everything
					in check, the result was nothing short of spectacular.
				</p>
			</div>
			{/* <div className="flex flex-col">
				<h1 className="text-[5vh] text-left mt-[4vh] mb-[0.5vh]">
					Pages & Gallery
				</h1>
				<div className="flex justify-evenly w-full">
					{Array.from({ length: 70 }).map((_, i) => (
						<div key={i} className="text-neutral-600 text-[1.5vh]">
							+
						</div>
					))}
				</div>
				<div className="grid grid-cols-3 gap-[1.5vw] mt-[3vh]">
					<div className="py-[2vh] px-[1vw] border-[1px] border-neutral-500 rounded-[2vh] shadow-md">
						<img
							src="/projects/mediblob.png"
							className="border-[1px] border-neutral-500 rounded-[1.5vh]"
							alt=""
						/>
						<p className="text-[2.5vh] mt-[1.25vh]">Dashboard</p>
					</div>
					<div className="py-[2vh] px-[1vw] border-[1px] border-neutral-500 rounded-[2vh] shadow-md">
						<img
							src="/projects/mediblob.png"
							className="border-[1px] border-neutral-500 rounded-[1.5vh]"
							alt=""
						/>
						<p className="text-[2.5vh] mt-[1.25vh]">Dashboard</p>
					</div>
				</div>
			</div> */}
			<div className="flex flex-col">
				<h1 className="text-[5vh] text-left mt-[5vh] mb-[0.5vh]">
					Technologies & Tools
				</h1>
				<div className="flex justify-evenly w-full">
					{Array.from({ length: 70 }).map((_, i) => (
						<div key={i} className="text-neutral-600 text-[1.5vh]">
							+
						</div>
					))}
				</div>
				<div className="flex flex-wrap gap-x-[2vw] gap-y-[1.75vh] max-w-[95%] mt-[3vh]">
					<span className="text-[2vh] px-[2vw] py-[1vh] rounded-full border-[1px] border-neutral-800">
						Vite
					</span>
					<span className="text-[2vh] px-[2vw] py-[1vh] rounded-full border-[1px] border-neutral-800">
						Typescript
					</span>

					<span className="text-[2vh] px-[2vw] py-[1vh] rounded-full border-[1px] border-neutral-800">
						Tailwind
					</span>
					<span className="text-[2vh] px-[2vw] py-[1vh] rounded-full border-[1px] border-neutral-800">
						React
					</span>
					<span className="text-[2vh] px-[2vw] py-[1vh] rounded-full border-[1px] border-neutral-800">
						Git
					</span>
					<span className="text-[2vh] px-[2vw] py-[1vh] rounded-full border-[1px] border-neutral-800">
						Github
					</span>

					<span className="text-[2vh] px-[2vw] py-[1vh] rounded-full border-[1px] border-neutral-800">
						HTML
					</span>
					<span className="text-[2vh] px-[2vw] py-[1vh] rounded-full border-[1px] border-neutral-800">
						CSS
					</span>
				</div>
			</div>
			<div className="flex flex-col">
				<h1 className="text-[5vh] text-left mt-[5vh] mb-[0.5vh]">Links</h1>
				<div className="flex justify-evenly w-full">
					{Array.from({ length: 70 }).map((_, i) => (
						<div key={i} className="text-neutral-600 text-[1.5vh]">
							+
						</div>
					))}
				</div>
				<div className="flex flex-wrap gap-x-[2vw] gap-y-[1.75vh] max-w-[95%] mt-[3vh]">
					<Link
						href="/"
						className="text-[2vh] px-[2vw] py-[1vh] rounded-full font-medium border-[1px] border-neutral-800 flex gap-[0.75vw] items-center justify-center"
					>
						<FaGithub /> Github
					</Link>
					<Link
						href="https://www.linkedin.com/feed/update/urn:li:activity:7169912560945688576/"
						className="text-[2vh] px-[2vw] py-[1vh] rounded-full font-medium border-[1px] border-neutral-800 flex gap-[0.75vw] items-center justify-center"
					>
						<FaLinkedin className="text-blue-800" /> Linkedin
					</Link>
					<Link
						href="https://dribbble.com/shots/23752831-Pomodoro-Timer"
						className="text-[2vh] px-[2vw] py-[1vh] rounded-full font-medium border-[1px] border-neutral-800 flex gap-[0.75vw] items-center justify-center"
					>
						<FaDribbble className="text-rose-600" /> Dribbble
					</Link>
					{/* <Link
						href="/"
						className="text-[2vh] px-[2vw] py-[1vh] rounded-full font-medium border-[1px] border-neutral-800 flex gap-[0.75vw] items-center justify-center"
					>
						<FaBehance className="text-sky-600" /> Behance
					</Link> */}
					<Link
						href="https://productivity-app-umber.vercel.app/"
						className="text-[2vh] px-[2vw] py-[1vh] rounded-full font-medium border-[1px] border-neutral-800 flex gap-[0.75vw] items-center justify-center"
					>
						<PiLinkBold className="text-green-800" /> Demo
					</Link>
				</div>
			</div>
			<div className="flex flex-col">
				<h1 className="text-[5vh] text-left mt-[5vh] mb-[0.5vh]">Evaluation</h1>
				<div className="flex justify-evenly w-full">
					{Array.from({ length: 70 }).map((_, i) => (
						<div key={i} className="text-neutral-600 text-[1.5vh]">
							+
						</div>
					))}
				</div>
				<div className="flex w-full mt-[3vh]">
					<div className="w-4/10 border-r-[1px] border-neutral-300 min-h-[15vh] pb-[0.5vh]">
						<div className="flex flex-col items-center justify-center mb-[1vh]">
							<span className="font-semibold text-[1.75vh]">Design</span>
							<span className="text-[1.75vh]">40%</span>
						</div>
						<div className="flex h-[5vh] bg-neutral-200 w-full relative rounded-l-[1vh] overflow-hidden">
							<div className="flex h-[5vh] bg-neutral-500 border-[1px] border-neutral-900 w-[80%] relative"></div>
						</div>
						<div className="flex flex-col items-center justify-center">
							<span className="mx-auto text-center text-[1.75vh] mt-[1vh]">
								7.8/10
							</span>
						</div>
					</div>
					<div className="w-3/10 border-r-[1px] border-neutral-300 min-h-[15vh]">
						<div className="flex flex-col items-center justify-center mb-[1vh]">
							<span className="font-semibold text-[1.75vh]">Usability</span>
							<span className="text-[1.75vh]">30%</span>
						</div>
						<div className="flex h-[5vh] bg-neutral-200 w-full relative rounded-l-[0vh] overflow-hidden">
							<div className="flex h-[5vh] bg-neutral-500 border-[1px] border-neutral-900 w-[80%] relative"></div>
						</div>
						<div className="flex flex-col items-center justify-center">
							<span className="mx-auto text-center text-[1.75vh] mt-[1vh]">
								7.8/10
							</span>
						</div>
					</div>
					<div className="w-2/10 border-r-[1px] border-neutral-300 min-h-[15vh]">
						<div className="flex flex-col items-center justify-center mb-[1vh]">
							<span className="font-semibold text-[1.75vh]">Creativity</span>
							<span className="text-[1.75vh]">20%</span>
						</div>
						<div className="flex h-[5vh] bg-neutral-200 w-full relative rounded-l-[0vh] overflow-hidden">
							<div className="flex h-[5vh] bg-neutral-500 border-[1px] border-neutral-900 w-[80%] relative"></div>
						</div>
						<div className="flex flex-col items-center justify-center">
							<span className="mx-auto text-center text-[1.75vh] mt-[1vh]">
								7.8/10
							</span>
						</div>
					</div>
					<div className="w-1/10 min-h-[15vh]">
						<div className="flex flex-col items-center justify-center mb-[1vh]">
							<span className="font-semibold text-[1.75vh]">Content</span>
							<span className="text-[1.75vh]">10%</span>
						</div>
						<div className="flex h-[5vh] bg-neutral-200 w-full relative rounded-r-[1vh] overflow-hidden">
							<div className="flex h-[5vh] bg-neutral-500 border-[1px] border-neutral-900 w-[80%] relative"></div>
						</div>
						<div className="flex flex-col items-center justify-center">
							<span className="mx-auto text-center text-[1.75vh] mt-[1vh]">
								7.8/10
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
