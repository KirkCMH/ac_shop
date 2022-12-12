import './App.module.css';
import StepProgress from'./components/StepProgress/StepProgress.js';
import StepOne from './components/Form/StepOne.js';
import ProgressControl from './components/ProgressControl/ProgressControl.js';

function App() {
  return (
    <div>
      <StepProgress />
      <StepOne />
      <ProgressControl />
    </div>
    
  );
}

export default App;
