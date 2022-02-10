import styles from './Up.module.css'
import {IoIosArrowUp} from 'react-icons/io'
import { motion, useAnimation } from 'framer-motion';
import { useScrollY } from '../../hooks/useScrollY';
import { useEffect } from 'react';

export const Up = (): JSX.Element => {

    const controls = useAnimation()
    const y =useScrollY()

    useEffect(() => {
        controls.start({opacity: y / document.body.scrollHeight})
    }, [y, controls])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<motion.button
			className={styles.up}
            animate={controls}
			initial={{ opacity: 0 }}
		>
			<IoIosArrowUp color='white' size='25px'onClick={scrollToTop} />
		</motion.button>
	);
};