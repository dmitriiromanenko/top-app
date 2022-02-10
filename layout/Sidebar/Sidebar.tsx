import { Sidebarprops } from './Sidebar.props'
import styles from './Sidebar.module.css'
import cn from 'classnames'
import { Menu } from '../Menu/Menu'
import { Search } from '../../components'


export const Sidebar = ({className,...props}: Sidebarprops): JSX.Element => {
        return( 
        <div {...props} className={cn(className, styles.sidebar)}>
            <Search/>
            <Menu/>
        </div>
    )
    
}