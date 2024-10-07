"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { TfiLinkedin } from "react-icons/tfi";
import { FaDribbble } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import {
	IconBrandGithub,
	IconBrandX,
	IconExchange,
	IconNewSection,
} from "@tabler/icons-react";
import Image from "next/image";

export function SkillIcons() {
	const links = [
		{
			title: "Linkedin",
			icon: (
				<TfiLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-900" />
			),
			href: "https://www.linkedin.com/in/yevheniia-simaka/",
		},
		{
			title: "GitHub",
			icon: (
				<IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-900" />
			),
			href: "https://github.com/jane-does-coding",
		},
		{
			title: "Dribbble",
			icon: (
				<FaDribbble className="h-full w-full text-neutral-500 dark:text-neutral-900" />
			),
			href: "https://dribbble.com/jane-does-coding",
		},
		{
			title: "Devpost",
			icon: (
				<SiDevpost className="h-full w-full text-neutral-500 dark:text-neutral-900" />
			),
			href: "https://devpost.com/I-am-jane",
		},
	];
	return (
		<div className="flex items-start justify-start w-fit">
			<FloatingDock items={links} />
		</div>
	);
}
