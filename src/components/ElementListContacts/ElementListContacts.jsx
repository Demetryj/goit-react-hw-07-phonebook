import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, Button, Circle } from './ElementListContactsStyled';
import { deleteContact } from 'redux/operations';
import { useSelector } from '../../../node_modules/react-redux/es/exports';
import { selectError } from 'redux/selectors';
import toast from 'react-hot-toast';

export const ElementListContacts = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleDelete = () => {
    dispatch(deleteContact(id));

    if (error) {
      toast.error(`${name} not deleted`);
    }
    toast.success(`${name} deleted from contacts`);
  };

  return (
    <>
      <Circle></Circle>
      <Text>
        {name}: {phone}
      </Text>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};

ElementListContacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
