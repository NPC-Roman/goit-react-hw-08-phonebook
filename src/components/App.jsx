/*import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { selectError, selectIsLoading } from 'redux/selectors';
import { SpinnerDotted } from 'spinners-react';

import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Form from './Form';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1
        style={{
          marginTop: '25px',
          textAlign: 'center',
          color: 'rgb(145, 122, 122)',
        }}
      >
        Phonebook
      </h1>
      <Form />
      <Filter />
      {isLoading && !error && <SpinnerDotted color="#36d7b7" />}
      <Contacts />
      <ToastContainer />
    </>
  );
};

export default App;*/

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import ContactsPage from 'pages/ContactsPage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

// import { SpinnerDotted } from 'spinners-react';
// import Contacts from './Contacts/Contacts';
// import Filter from './Filter/Filter';
// import Form from './Form';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={<Login />} redirectTo="/contacts" />
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
          </Route>
        </Routes>
        <ToastContainer />
      </>
    )

    // {/* <h1
    //   style={{
    //     marginTop: '25px',
    //     textAlign: 'center',
    //     color: 'rgb(145, 122, 122)',
    //   }}
    // >
    //   Phonebook
    // </h1>
    // <Form />
    // <Filter />
    // {isLoading && !error && <SpinnerDotted color="#36d7b7" />}
    // <Contacts />
    // <ToastContainer /> */}
  );
};

export default App;
