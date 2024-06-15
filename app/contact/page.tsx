"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/devollox",
		label: "Twitter",
		handle: "@devollox_",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:devollox@.com",
		label: "Email",
		handle: "devollox@.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/devollox",
		label: "Github",
		handle: "devollox",
	},
];

export default function Example() {
	return (
		<>

		</>
	);
}
