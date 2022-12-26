import cartData from './cartData.js'
import { ReactComponent as Plus } from '../../img/plusIcon.svg'
import { ReactComponent as Minus } from '../../img/minusIcon.svg'
import styles from './Cart.module.css'

function CartInfo({ title, price }) {
  return (
    <div className={styles.info}>
      <span>{title}</span>
      <p>{price}</p>
    </div>
  )
}


export default function Cart() {
  const listItems = cartData.map((data) => (
    <div key={data.id} className={styles.items}>
      <img
        className={styles.productImg}
        src={data.img}
        alt={data.name} />
      <div className={styles.productInfo}>
        <h5 className={styles.productName}>{data.name}</h5>
        <div className={styles.amountController}>
          <Minus />
          <p className={styles.amountNumber}>{data.quantity}</p>
          <Plus />
        </div>
        <p id='totalPrice' className="price">${data.price * data.quantity}</p>
      </div>

    </div>
  ))
  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartHeader}>購物籃</h3>
      <div>
        {listItems}
      </div>
      <CartInfo title='運費' price='免費' />
      <CartInfo title='小計' price='$400' />
    </section>
  )
}