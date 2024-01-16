import './App.css';
import Border from './components/Formborderred';
import Login from './components/Login';
import Signup from './components/Signup';
import DynamicForm from './components/contactForm/DynamicForm';
import Form from './components/contactForm/Form';
import Stepper1 from './components/multiStepperForm/Stepper1';
import Table from './components/multiStepperForm/Table';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Index1 /> */}
      {/* <Form /> */}
      {/* <DynamicForm /> */}
      {/* <StepperForm /> */}
      {/* <Border /> */}
      <Stepper1 />
      {/* <Table /> */}
    </div>
  );
}

export default App;
