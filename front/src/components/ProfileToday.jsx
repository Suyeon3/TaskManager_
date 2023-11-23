import ProfileTodays from "./ProfileTodays";
import styles from '../css/profile.module.css'

export default function ProfileToday() {
    return (
        <div style={{margin: '1rem 0rem'}}>
            <div style={{textAlign:'center'}}>Today</div>
            <div className={styles.todays}>
                <ProfileTodays completeState={true} cnt={5} />
                <ProfileTodays completeState={false} cnt={3} />
            </div>
        </div>
    )
}