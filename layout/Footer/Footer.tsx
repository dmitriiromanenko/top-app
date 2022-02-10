import { Footerprops } from './Footer.props'
import styles from './Footer.module.css'
import cn from 'classnames'
import { format } from 'date-fns'

export const Footer = ({className, ...props}: Footerprops): JSX.Element => {
        return( 
        <footer className={cn(className,styles.footer)}{...props}>
            <div>
                OwlTopl ®2020 - {format(new Date(), 'yyy')} All rights reserved
            </div>
            <a href="#" target="_blank">Users agreement</a>
            <a href="#" target="_blank">Confidential policy</a>

        </footer>
    )
    
}