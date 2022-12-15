import { useEffect } from 'react';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Forma } from 'components/Forma';
import { ListContacts } from 'components/ListContacts';
import { Filter } from 'components/Filter';
import { Box } from './Box';
import { Title, TitleContacts } from './Titles/TitlesStyled';
import { Loader } from 'components/Loader';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box p={[4]}>
      <Title>Phonebook</Title>
      <Forma />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      {!isLoading && error && <p>{error}</p>}
      {contacts.length > 0 && <ListContacts />}
      {isLoading && <Loader />}
    </Box>
  );
};
