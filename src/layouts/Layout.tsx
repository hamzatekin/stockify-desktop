import { BrowserRouter as Router } from 'react-router-dom';
import PrivateLayout from './PrivateLayout/PrivateLayout';

const Layouts = () => {
  return (
    <Router>
      <PrivateLayout />
    </Router>
  );
};

export default Layouts;
