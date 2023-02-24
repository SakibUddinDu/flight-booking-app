import { Provider } from 'react-redux';
import './App.css';
import BookingForm from './components/BookingForm';
import Bookings from './components/Bookings';
import Navbar from './components/Navbar';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div>
    <Navbar></Navbar>
    <section>
      {/* <!-- Input Data --> */}
      <BookingForm></BookingForm>

      {/* <!-- Preview Data --> */}
     <Bookings></Bookings>
    </section>
    </div>
    </Provider>
  );
}

export default App;
