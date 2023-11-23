import { useState } from 'react';
import styles from '../css/profile.module.css';

export default function GoalList() {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return(
    <div style={{margin: '1rem 0rem'}}>
        <div style={{display: 'flex'}} onClick={handleOpen}>
            <div>Goals</div>
            <div>
                {isOpen ? (
                <span className="material-symbols-outlined">expand_more</span> 
                ) : (
                <span className="material-symbols-outlined">expand_less</span>
                )}
            </div>
        </div> 
        <div>
            <ul 
            className={styles.goal_list} 
            style={{display: isOpen ? 'block' : 'none'}}>
                <li>목표1</li>
                <li>목표2</li>
            </ul>
        </div>
    </div>
    )
}