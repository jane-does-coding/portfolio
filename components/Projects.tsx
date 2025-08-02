import { FaComment, FaEye, FaHeart } from "react-icons/fa";

const Projects = () => {
	return (
		<div className="flex flex-col">
			{/* <div className="flex w-full items-center justify-between pb-[1.5vh] border-b-[1px] border-neutral-200">
				<div className="flex w-full items-center gap-[0.5vw]">
					<button className="px-[1vw] py-[0.25vh] bg-neutral-100 hover:bg-neutral-100 transition-all cursor-pointer border-[1px] border-neutral-200 hover:border-neutral-200 rounded-full font-medium text-[2vh]">
						Work
					</button>
					<button className="px-[1vw] py-[0.25vh] hover:bg-neutral-100 transition-all cursor-pointer border-[1px] border-neutral-50/0 hover:border-neutral-200 rounded-full font-medium text-[2vh]">
						Services
					</button>
					<button className="px-[1vw] py-[0.25vh] hover:bg-neutral-100 transition-all cursor-pointer border-[1px] border-neutral-50/0 hover:border-neutral-200 rounded-full font-medium text-[2vh]">
						Collections
					</button>
				</div>
				<div className="flex w-fit items-center">
					<button className="px-[1vw] py-[0.25vh] hover:bg-neutral-100 transition-all cursor-pointer border-[1px] border-neutral-50/0 hover:border-neutral-200 rounded-full font-medium text-[2vh]">
						Collections
					</button>
				</div>
			</div> */}
			<div className="grid grid-cols-3 gap-[2vw] mt-[1vh]">
				<div className="">
					<img
						src="/projects/mediblob.png"
						className="border-[1px] border-neutral-200 rounded-[1.5vh] mb-[0.75vh]"
						alt=""
					/>
					<div className="flex items-center justify-between gap-[1vw]">
						<p className="text-[2.25vh] font-medium">Mediblob</p>
						<div className="flex gap-[1vw]">
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaComment />0
							</div>
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaHeart />0
							</div>
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaEye />0
							</div>
						</div>
					</div>
				</div>
				<div className="">
					<img
						src="/projects/daily-bites.png"
						className="border-[1px] border-neutral-200 rounded-[1.5vh] mb-[0.75vh]"
						alt=""
					/>
					<div className="flex items-center justify-between gap-[1vw]">
						<p className="text-[2.25vh] font-medium">Daily Bites</p>
						<div className="flex gap-[1vw]">
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaComment />0
							</div>
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaHeart />0
							</div>
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaEye />0
							</div>
						</div>
					</div>
				</div>
				<div className="">
					<img
						src="/projects/specify.png"
						className="border-[1px] border-neutral-200 rounded-[1.5vh] mb-[0.75vh]"
						alt=""
					/>
					<div className="flex items-center justify-between gap-[1vw]">
						<p className="text-[2.25vh] font-medium">Specify</p>
						<div className="flex gap-[1vw]">
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaComment />0
							</div>
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaHeart />0
							</div>
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaEye />0
							</div>
						</div>
					</div>
				</div>
				<div className="">
					<img
						src="/projects/lumea.png"
						className="border-[1px] border-neutral-200 rounded-[1.5vh] mb-[0.75vh]"
						alt=""
					/>
					<div className="flex items-center justify-between gap-[1vw]">
						<p className="text-[2.25vh] font-medium">Lumea</p>
						<div className="flex gap-[1vw]">
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaComment />0
							</div>
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaHeart />0
							</div>
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaEye />0
							</div>
						</div>
					</div>
				</div>
				<div className="">
					<img
						src="/projects/pomodoro.png"
						className="border-[1px] border-neutral-200 rounded-[1.5vh] mb-[0.75vh]"
						alt=""
					/>
					<div className="flex items-center justify-between gap-[1vw]">
						<p className="text-[2.25vh] font-medium">Pomodoro</p>
						<div className="flex gap-[1vw]">
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaComment />0
							</div>
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaHeart />0
							</div>
							<div className="flex items-center gap-[0.25vw] text-neutral-500 text-[1.75vh]">
								<FaEye />0
							</div>
						</div>
					</div>
				</div>
				<div className="w-full h-full rounded-[2vh]"></div>
			</div>
		</div>
	);
};

export default Projects;
