import { motion } from 'framer-motion';
const Series = () => {
	return (
		<motion.div
			className='series-page'
			initial={{ x: '-100%' }}
			animate={{ x: '0' }}
			exit={{ y: '-100%' }}
			transition={{ duration: 0.3 }}
		>
			Series
		</motion.div>
	);
};

export default Series;
