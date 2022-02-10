import cn from 'classnames'
import styles from '../layout/Menu/Menu.module.css'
import { FaHardHat } from 'react-icons/fa'; //courses
import { FaBookOpen } from 'react-icons/fa'; //books
import { FaCloud } from 'react-icons/fa' //services
import { FaBoxOpen } from 'react-icons/fa'; 

import { FirstLevelMenuItem } from '../interfaces/menu.interface'
//goods
import { TopLevelCategory } from '../interfaces/page.interface'




export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Courses', icon: <FaHardHat className={cn(styles.icon)}/>,id: TopLevelCategory.Courses},
    {route: 'courses', name: 'Services', icon: <FaCloud className={cn(styles.icon)}/>,id: TopLevelCategory.Services},
    {route: 'courses', name: 'Books', icon: <FaBookOpen className={cn(styles.icon)}/>,id: TopLevelCategory.Books},
    {route: 'courses', name: 'Products', icon: <FaBoxOpen className={cn(styles.icon)}/>,id: TopLevelCategory.Products}
]


export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat('₽')


export const declOfNum = (number: number, titles: [string,string,string]): string => {
    const cases = [2,0,1,1,1,2]
    return titles[(number %100 > 4 && number %100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ]
}