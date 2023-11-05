/** @format */
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Navigation = () => {
	return (
		<nav className='w-screen pt-20 '>
			<h2 className='text-center text-3xl mb-5'>Pill Effect</h2>
			<motion.ul className='flex font-[500] text-xl py-10 border justify-center'>
				<NavItem itemName='Home' />
				<NavItem itemName='About us' />
				<NavItem itemName='Products' />
				<NavItem itemName='Contact' />
			</motion.ul>
		</nav>
	);
};

export const NavItem = ({ itemName }: { itemName: string }) => {
	const [isHovered, setIsHovered] = useState(false);

	const onHoverStart = () => setIsHovered(true);
	const onHoverEnd = () => setIsHovered(false);

	return (
		<motion.li
			onHoverStart={onHoverStart}
			onHoverEnd={onHoverEnd}
			className='py-1.5 px-7 text-black/75 '>
			<a
				className='relative px-3 py-1.5 '
				href={`#${itemName}`}>
				{itemName}
				{isHovered && <Pill />}
			</a>
		</motion.li>
	);
};

export const Pill = () => {
	return (
		<motion.div
			layoutId='pillow'
			className='absolute inset-0 bg-gradient-to-r from-rose-500 to-rose-500/25 -z-10'
			// Prevent distortion when changing the item, instead (rounded-full)
			style={{ borderRadius: 9999 }}
		/>
	);
};
