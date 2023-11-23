import styles from '../css/profile.module.css';

export default function ProfileTodays({completeState, cnt}) {

    return (
        <div className={completeState ? styles.todays_complete : styles.todays_incomplete}>
            <div>
                {completeState ? '': '미'}완료 : 
            </div>
            <div>{cnt}</div>
        </div>
    )
}