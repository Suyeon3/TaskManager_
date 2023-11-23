import styles from '../css/profile.module.css'
import GoalList from './GoalList'
import ProfileToday from './ProfileToday'

export default function Profile() {
    return (
    <div className={styles.profile_container}>
        <div className={styles.avatar_container}>
            <div className={styles.img_container}>
            <img src='https://cdn.pixabay.com/photo/2023/07/24/20/42/poppy-8147823_1280.jpg' className={styles.avatar_img}></img>
            </div>
            <div className={styles.name}>장수연 님</div>
            <div className={styles.message}>hello</div>
        </div>
        <ProfileToday/>
        <GoalList />
        
        
        <div className={styles.memo}>
        </div>
    </div>
    )
} 