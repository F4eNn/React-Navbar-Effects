/** @format */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const Navigation = () => {
	return (
		<nav className='w-screen pt-20 '>
			<h1 className='text-center text-3xl mb-5'>Underline</h1>
			<motion.ul className='flex font-[500] py-10 text-xl border justify-center'>
				<NavItem itemName='Home' />
				<NavItem itemName='About us' />
				<NavItem itemName='Products' />
				<NavItem itemName='Contact' />
			</motion.ul>
		</nav>
	);
};

const NavItem = ({ itemName }: { itemName: string }) => {
	const [isHovered, setIsHovered] = useState(false);

	const onHoverStart = () => setIsHovered(true);
	const onHoverEnd = () => setIsHovered(false);

	return (
		<motion.li
			onHoverStart={onHoverStart}
			onHoverEnd={onHoverEnd}
			className='px-10  text-black/75 hover:text-black transition-colors duration-300'>
			<a
				className='relative cursor-pointer py-1.5'
				href={`#${itemName}`}>
				{itemName}
				<AnimatePresence>{isHovered && <Underline />}</AnimatePresence>
			</a>
		</motion.li>
	);
};

const Underline = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			layoutId='underline'
			className='absolute -bottom-[1px] bg-gradient-to-r w-full from-rose-800 via-rose-300 to-rose-800 h-1'
		/>
	);
};
