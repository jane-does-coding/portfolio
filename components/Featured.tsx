"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({
	image,
	tags,
	title,
}: {
	image: string;
	tags: string;
	title: string;
}) => {
	const { ref: imgRef, inView: imgInView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const { ref: pRef, inView: pInView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const { ref: h2Ref, inView: h2InView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<div className="flex flex-col">
			<motion.img
				ref={imgRef}
				initial={{ opacity: 0, y: 20 }}
				animate={imgInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, ease: "easeOut" }}
				src={image}
				className="h-[45vh] w-full object-cover rounded-[0.5rem] mb-[0.75rem]"
				alt=""
			/>
			<motion.p
				ref={pRef}
				initial={{ opacity: 0, y: 20 }}
				animate={pInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
				className="text-[1.5vh] font-medium uppercase"
			>
				{tags}
			</motion.p>
			<motion.h2
				ref={h2Ref}
				initial={{ opacity: 0, y: 20 }}
				animate={h2InView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
				className="text-[5vh]"
			>
				{title}
			</motion.h2>
		</div>
	);
};

const Featured = () => {
	const { ref: headingRef, inView: headingInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	const { ref: pRef, inView: pInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	const { ref: bottomRef, inView: bottomInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	return (
		<div className="mb-[12.5vh]">
			<div className="w-[90vw] mx-auto flex justify-between items-end">
				<motion.h2
					ref={headingRef}
					initial={{ opacity: 0, y: 20 }}
					animate={headingInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
					className="text-[12vh]"
				>
					Your Life, Gamified
				</motion.h2>
				<motion.p
					ref={pRef}
					initial={{ opacity: 0, y: 20 }}
					animate={pInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
					className="w-[20vw] text-[2vh] pb-[1vh]"
				>
					Build habits, crush goals, and level up daily. Track progress, earn
					XP, and stay motivated.
				</motion.p>
			</div>
			<br />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-[4vh] gap-y-[8vh] w-[90vw] mb-[7.5vh] mx-auto">
				<Card
					image="https://placehold.co/600x400"
					tags="Your life • quest hub • goals • progress

"
					title="Dashboard"
				/>
				<Card
					image="https://placehold.co/600x400"
					tags="Daily tasks • weekly goals • epic challenges

"
					title="Quests"
				/>
				<Card
					image="https://placehold.co/600x400"
					tags="Earn XP • level up • unlock custom rewards"
					title="XP & Rewards"
				/>
				<Card
					image="https://placehold.co/600x400"
					tags="Visualize your growth • Track skills • Track hobbies"
					title="Skill Tree"
				/>
			</div>
			{/* 	<div className="w-[90vw] mx-auto flex items-center justify-center">
				<a
					href=""
					className="uppercase text-[0.75rem] font-semibold bg-neutral-100 shadow-md px-[1.5rem] py-[0.5rem] h-fit w-fit text-black rounded-full"
				>
					Let&apos;s Talk •
				</a>
			</div> */}
			<motion.div
				ref={bottomRef}
				initial={{ opacity: 0, y: 10 }}
				animate={bottomInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
				className="flex w-[90vw] mx-auto mt-[5vh]"
			>
				<div className="w-1/3 flex items-center justify-start">
					<p className="text-[4vh]">+</p>
				</div>
				<div className="w-1/3 flex items-center justify-between">
					<p className="text-[4vh]">+</p>
					<p className="text-[4vh]">+</p>
				</div>
				<div className="w-1/3 flex items-center justify-end">
					<p className="text-[4vh]">+</p>
				</div>
			</motion.div>
		</div>
	);
};

export default Featured;
