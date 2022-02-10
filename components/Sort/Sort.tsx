import { SortEnum, SortProps } from './Sort.props'
import styles from './Sort.module.css'
import cn from 'classnames'
import {MdSort} from "react-icons/md"

export const Sort = ({sort, setSort, className, ...props}: SortProps): JSX.Element => {
        return( 
            <div className={cn(styles.sort, className)} {...props}>
                <span onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]:sort == SortEnum.Rating
                })}
                >
                    <MdSort className={styles.sortIcon}/>По рейтингу
                </span>

                <span 
                onClick={() => setSort(SortEnum.Price)}
                className={cn(
                    {[styles.active]:sort == SortEnum.Price})}
                >
                    <MdSort className={styles.sortIcon} />По&nbsp;цене
                </span>                
            </div>
    )
    
}