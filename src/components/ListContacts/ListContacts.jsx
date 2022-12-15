import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { ElementListContacts } from 'components/ElementListContacts';
import { List, ElementList } from './ListContactsStyled';

export const ListContacts = () => {
  const visibileContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibileContacts.map(({ name, phone, id }) => (
        <ElementList key={id}>
          <ElementListContacts name={name} phone={phone} id={id} />
        </ElementList>
      ))}
    </List>
  );
};
