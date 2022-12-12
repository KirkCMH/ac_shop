
import styles from './ProgressControl.module.css'

function Btn({ text, phase }) {
  return (
    <div>
      {
        phase === 'isNextStep'
          ? <button className={`${styles.btnPrimary} ${styles.btn}`}>{text}</button>
          : <button className={`${styles.btnBare} ${styles.btn}`}>{text}</button>
      }
    </div>
  )
}

export default function ProgressControl() {
  return (
    <div className={styles.btnControl}>
      <Btn text='上一步' />
      <Btn text='下一步' phase='isNextStep' />
    </div>
  )
}