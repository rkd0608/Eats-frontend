import React from 'react';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';
import styles from './SearchResult.module.css';

export function SearchResult(){

    return(

        <div className={styles['search-result']}>
            <img src='https://via.placeholder.com/210' alt='business' className={styles['business-image']}/>
            <div className={styles['business-info']}>
                <h2 className="subtitle">Burger Place</h2>
                <BusinessRating />
                <p>$$ 
                    <span className="tag">
                    Tag label
                    </span>
                    
                    <span className="tag">
                        Tag label
                    </span>
                </p>
                
            </div>
            <div className={styles['contact-info']}>
                <p>+91919191919 </p>
                <p>Example Street 5</p>
                <p>12345 Buffalo</p>
            </div>
            
        </div>
    );
}