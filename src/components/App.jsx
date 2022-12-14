import { Forma } from 'components/Forma';
import { ListContacts } from 'components/ListContacts';
import { Filter } from 'components/Filter';
import { Box } from './Box';
import { Title, TitleContacts } from './Titles/TitlesStyled';

export const App = () => {
  return (
    <Box p={[4]}>
      <Title>Phonebook</Title>
      <Forma />

      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ListContacts />
    </Box>
  );
};
