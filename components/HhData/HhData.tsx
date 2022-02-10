import React from 'react'
import { HhDataProps } from './HhData.props'
import styles from './HhData.module.css'
import cn from 'classnames'
import {Card} from '../Card/Card'
import { AiFillStar } from "react-icons/ai";
import { priceRu } from '../../helpers/helpers'


export const HhData = ({ count,juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
        return( 
            <div className={styles.hh}>
                <Card className={styles.count}>
                    <div className={styles.title}>Total amount of Vacancies</div>
                    <div className={styles.countValue}>{count}</div>
                </Card>
                <Card className={styles.salary}>
                    <div>
                        <div className={styles.title}>Junior</div>
                        <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
                        <div className={styles.rate}>
                            <AiFillStar className={styles.filled}/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </div>                        
                    </div>
                    <div>
                        <div className={styles.title}>Middle</div>
                        <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
                        <div className={styles.rate}>
                            <AiFillStar className={styles.filled}/>
                            <AiFillStar className={styles.filled}/>
                            <AiFillStar/>
                        </div>                        
                    </div>
                    <div>
                        <div className={styles.title}>Senior</div>
                        <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
                        <div className={styles.rate}>
                            <AiFillStar className={styles.filled}/>
                            <AiFillStar className={styles.filled}/>
                            <AiFillStar className={styles.filled}/>
                        </div>                        
                    </div>                                        
                </Card>
            </div>
    )
    
}