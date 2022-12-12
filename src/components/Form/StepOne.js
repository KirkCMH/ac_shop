import styles from './StepOne.module.css';



const selection = {
  gender: [
    { value: 'mr', label: '先生' },
    { value: 'ms', label: '女士' },
    { value: 'other', label: '不明' },
  ],

  city: [
    { value: "", label: "請選擇縣市" },
    { value: "KLU", label: "基隆市" },
    { value: "TPH", label: "新北市" },
    { value: "TPE", label: "臺北市" },
    { value: "TYC", label: "桃園市" },
    { value: "HSH", label: "新竹縣" },
    { value: "HSC", label: "新竹市" },
    { value: "MAC", label: "苗栗市" },
    { value: "MAL", label: "苗栗縣" },
    { value: "TXG", label: "臺中市" },
    { value: "CWH", label: "彰化縣" },
    { value: "CWS", label: "彰化市" },
    { value: "NTC", label: "南投市" },
    { value: "NTO", label: "南投縣" },
    { value: "YLH", label: "雲林縣" },
    { value: "CHY", label: "嘉義縣" },
    { value: "CHI", label: "嘉義市" },
    { value: "TNN", label: "臺南市" },
    { value: "KHH", label: "高雄市" },
    { value: "IUH", label: "屏東縣" },
    { value: "PTS", label: "屏東市" },
    { value: "ILN", label: "宜蘭縣" },
    { value: "ILC", label: "宜蘭市" },
    { value: "HWA", label: "花蓮縣" },
    { value: "HWC", label: "花蓮市" },
    { value: "TTC", label: "臺東市" },
    { value: "TTT", label: "臺東縣" },
    { value: "PEH", label: "澎湖縣" },
    { value: "KMN", label: "金門縣" },
    { value: "LNN", label: "連江縣" }
  ]
}




function OptionForm({ id, label, options }) {
  return (
    <div id={styles[id]} className={styles.formRow}>
      <label>{label}</label>
      <div className={styles.selectWrapper}>
        <select required="">
          {
            options.map(option => {
              return (
                <option value={option.value} key={option.value}>{option.label}</option>
              )
            })
          }
        </select>
      </div>
    </div>
  )
}

function InputForm({ id, label, placeholder }) {
  return (
    <div id={styles[id]} className={`${styles.formRow} ${styles.title}`}>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  )
}

export default function StepOne() {
  return (
    <div className={styles.formContainer}>
      <h1 className={ styles.formTitle }>寄送地址</h1>
      <div className={`${styles.gridContainer} ${styles.stepOneGrid}`}>
        <OptionForm
          id='title'
          label='稱謂'
          options={selection.gender}
        />
        <InputForm
          id='name'
          label='姓名'
          placeholder='請輸入姓名'
        />
        <InputForm
          id='phone'
          label='電話'
          placeholder='請輸入行動電話'
        />
        <InputForm
          id='email'
          label='Email'
          placeholder='請輸入電子郵件'
        />
        <OptionForm
          id='city'
          label='縣市'
          options={selection.city}
        />
        <InputForm
          id='address'
          label='地址'
          placeholder='請輸入地址'
        />
      </div>
    </div>
  )

}