"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoLogoInstagram } from "react-icons/io5";
import { LuLinkedin } from "react-icons/lu";
import { AiOutlineTikTok } from "react-icons/ai";

const Info = () => {
	const { ref: firstRef, inView: firstInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	const { ref: secondRef, inView: secondInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	const { ref: thirdRef, inView: thirdInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	const { ref: bottomRef, inView: bottomInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	return (
		<div className="mb-[10vh]">
			{/* Grid */}
			<div className="w-[90vw] mx-auto flex flex-col md:flex-row h-[70vh]">
				{/* First Block */}
				<motion.div
					ref={firstRef}
					initial={{ opacity: 0, y: 20 }}
					animate={firstInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="w-full md:w-1/3 flex flex-col items-center justify-center p-[1.25rem] border-r-[2px] border-b-[2px] border-neutral-200"
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={firstInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
						className="mb-[3vh] px-[1vw]"
					>
						<h2 className="text-[4.5vh] pb-[1vh]">Who I Am</h2>
						<p className="text-[1.5vh] font-medium uppercase">
							I{"'"}m Yevheniia (but you can call me Janey), a 16-year-old
							frontend developer from Salt Lake City who{"'"}s obsessed with
							building clean, aesthetic web apps.
						</p>
					</motion.div>
					<motion.img
						initial={{ opacity: 0, y: 20 }}
						animate={firstInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
						src="/projects/specify.png"
						className="w-full border-[1px] border-neutral-300 aspect-[1] object-cover rounded-[0.5rem]"
						alt=""
					/>
				</motion.div>

				{/* Second Block */}
				<motion.div
					ref={secondRef}
					initial={{ opacity: 0, y: 20 }}
					animate={secondInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="w-full md:w-1/3 flex flex-col items-center justify-center p-[1.25rem] border-b-[2px] border-neutral-200"
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={secondInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
						className="mb-[3vh] px-[1vw]"
					>
						<h2 className="text-[4.5vh] pb-[1vh]">What I Do</h2>
						<p className="text-[1.5vh] font-medium uppercase">
							I design and build projects with Next.js, TypeScript, and Tailwind
							— from habit trackers to carbon footprint calculators. I love
							making things functional *and* pretty.
						</p>
					</motion.div>
					<motion.img
						initial={{ opacity: 0, y: 20 }}
						animate={secondInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
						src="/projects/pomodoro.png"
						className="w-full aspect-[1] border-[1px] border-neutral-300 object-cover rounded-[0.5rem]"
						alt=""
					/>
				</motion.div>

				{/* Third Block */}
				<motion.div
					ref={thirdRef}
					initial={{ opacity: 0, y: 20 }}
					animate={thirdInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="w-full md:w-1/3 flex flex-col items-center justify-between p-[1.5rem] py-[5vh] bg-indigo-100 rounded-[0.5rem]"
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={thirdInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
						className="flex items-center justify-between w-full"
					>
						<h3 className="text-[3.5vh]">Let{"'"}s Connect</h3>
						<div className="flex items-center gap-[1.5vw]">
							<IoLogoInstagram size={24} />
							<LuLinkedin size={24} />
							<AiOutlineTikTok size={24} />
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={thirdInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
						className="px-[1rem]"
					>
						<h3 className="text-[5vh] mb-[1vh]">The Goal</h3>
						<h4 className="text-[2vh]">
							Currently chasing two main things: finding a job in tech and
							providing web development services by building clean, functional,
							and aesthetic websites.
						</h4>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={thirdInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
						className="pt-[1rem] border-t-2 border-indigo-300"
					>
						<p className="text-[2vh]">
							I mix tech with creativity, caffeine with ambition, and a little
							bit of chaos with clean code.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default Info;
