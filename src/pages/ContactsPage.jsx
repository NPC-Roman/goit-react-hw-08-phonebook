import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Contacts from 'components/Contacts/Contacts';
import Form from 'components/Form';
import Filter from 'components/Filter/Filter';
import { SpinnerDotted } from 'spinners-react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

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
      {isLoading && <SpinnerDotted color="#36d7b7" />}
      <Contacts />

      {/* <Filter />
      {isLoading && !error && <SpinnerDotted color="#36d7b7" />}
      <Contacts />

      <div>{isLoading && 'Request in progress...'}</div>
      <Contacts /> */}
    </>
  );
}
