import { Headerprops } from './Header.props'
import styles from './Header.module.css'
import cn from 'classnames'
import { RiMenu4Line } from 'react-icons/ri'
import { motion, useReducedMotion } from 'framer-motion'
import { Sidebar } from '../Sidebar/Sidebar'
import { IoIosClose } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

export const Header = ({className, ...props}: Headerprops): JSX.Element => {

	const [isOpened, setIsOpened] = useState<boolean>(false);
	
	const router = useRouter();
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		setIsOpened(false);
	}, [router]);

    
	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: 0,
			x: '100%',
		}
	};
        return( 
        <header className={cn(className,styles.header)} {...props}>
            <div className={styles.button}><RiMenu4Line color='var(--primary)' size='38px' onClick={() => setIsOpened(true)} /></div>
            <motion.div 
            className={styles.mobileMenu}
            variants={variants}
            initial={'closed'}
            animate={isOpened ? 'opened' : 'closed'}
            >
                <Sidebar/>
                <div className={styles.menuClose} onClick={() => setIsOpened(false)}><IoIosClose color='var(--primary)' size='40px' /></div>
            </motion.div>
        </header>
    )
    
}