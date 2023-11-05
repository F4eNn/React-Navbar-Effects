/** @format */
import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
	{ id: 'home', itemName: 'Home' },
	{ id: 'about us', itemName: 'About us' },
	{ id: 'products', itemName: 'Products' },
	{ id: 'contact', itemName: 'Contact' },
];

export const Navigation = () => {
	const [activeLink, setActiveLink] = useState(navItems[0].id);

	const handleSetActive = (id: (typeof navItems)[number]['id']) => setActiveLink(id);

	return (
		<nav className='w-screen pt-20 '>
			<h2 className='text-center text-3xl mb-5'>Active</h2>
			<motion.ul className='flex font-[500] text-xl border justify-center'>
				{navItems.map(({ id, itemName }) => (
					<li
						key={id}
						className={`py-10 px-7  text-black/75`}>
						<a
							onClick={() => handleSetActive(id)}
							href={`#${itemName}`}
							className={`${
								id === activeLink ? '' : 'hover:text-orange-400 '
							} cursor-pointer px-3 py-1.5 transition-colors duration-300 relative`}>
							{itemName}
							{id === activeLink && <PillActive />}
						</a>
					</li>
				))}
			</motion.ul>
		</nav>
	);
};

export const PillActive = () => {
	return (
		<motion.div
			layoutId='pillow-active'
			className='absolute  inset-0 bg-gradient-to-r from-orange-500 to-orange-500/25  -z-10'
			// Prevent distortion when changing the item, instead (rounded-full)
			style={{ borderRadius: 9999 }}
		/>
	);
};
