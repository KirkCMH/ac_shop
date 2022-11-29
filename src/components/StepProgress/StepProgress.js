import styles from './StepProgress.module.css'

// Step component
function Step({ active, text, label }) {
  return (
    <div className={styles.progress} active={active}>
      <div className={styles.circleContainer}>
        <span className={styles.content}>{text}</span></div>
      <div className={styles.labelContainer}>{label}</div>
    </div>
  );
}

// Progress Bar component
function ProgressBar({ className , right , left }) {
  return (
    <span 
      className={className}
      style={{
        right:  right ,
        left: left
      }}
    ></span>
  );
}

export default function ProgressStep() {
  return (
    <div className={styles.stepper}>
      <h1 className={styles.stepperTitle}>結帳</h1>
      <div className={styles.progressContainer}>
        <Step
          active="true"
          text="1"
          label="寄送地址"
        />
        <ProgressBar className={styles.connectLine} left="25%" />
        
        <Step
          active="false"
          text="2"
          label="運送方式"
        />
        <ProgressBar className={styles.connectLine} right="25%" />
        <Step
          active="false"
          text="3"
          label="付款資訊"
        />
      </div>
    </div>
  );
}
