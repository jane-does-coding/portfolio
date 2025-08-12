import Link from "next/link";
import { FaComment, FaEye, FaHeart } from "react-icons/fa";

const Projects = () => {
	const projects = [
		{ name: "Mediblob", img: "/projects/mediblob.png", link: "/mediblob" },
		{
			name: "Daily Bites",
			img: "/projects/daily-bites.png",
			link: "/daily-bites",
		},
		{ name: "Specify", img: "/projects/specify.png", link: "/specify" },
		{ name: "Lumea", img: "/projects/lumea.png", link: "/lumea" },
		{ name: "Pomodoro", img: "/projects/pomodoro.png", link: "/pomodoro" },
	];

	return (
		<div className="flex flex-col">
			<div className="grid grid-cols-3 gap-[2vw] mt-[1vh]">
				{projects.map((project) => (
					<Link key={project.name} href={project.link} className="">
						<img
							src={project.img}
							className="border-[1px] border-neutral-200 rounded-[1.5vh] hover:scale-[1.025] mb-[0.75vh] transition-all"
							alt={project.name}
						/>
						<div className="flex items-center justify-between gap-[1vw]">
							<p className="text-[2.25vh] font-medium">{project.name}</p>
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
					</Link>
				))}
				<div className="w-full h-full rounded-[2vh]"></div>
			</div>
		</div>
	);
};

export default Projects;
