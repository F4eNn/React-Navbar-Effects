/** @format */

export const Link = () => {
	return (
		<a
            href="https://github.com/F4eNn/React-Navbar-Effects"
            target="_blank"
            rel="noopener noreferrer"
			aria-label='checkout my repository of this project'
			className='absolute right-2 top-2 h-12 w-12 z-20 cursor-pointer'>
                
			<div className='absolute h-60 rotate-45 w-60  -top-[9.5rem] -right-[10.2rem] bg-[#24292f] -z-10'></div>
			<img
				src='./github-mark-white.png'
				alt='github logo'
			/>
		</a>
	);
};
