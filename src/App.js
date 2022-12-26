import styles from './App.module.css';
import StepProgress from'./components/StepProgress/StepProgress.js';
import StepOne from './components/Form/StepOne.js';
import ProgressControl from './components/ProgressControl/ProgressControl.js';
import Cart from './components/Cart/Cart.js';

function App() {
  return (
    <div>
      <div>
        <StepProgress />
        <StepOne />
        <ProgressControl />
      </div>
      <div className={styles.cartPanel}>
       <Cart />
      </div>
    </div>
    
    
  );
}

export default App;
