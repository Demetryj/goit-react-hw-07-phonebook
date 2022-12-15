import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { selectContacts, selectError } from 'redux/selectors';
import { Form, Label, Input, Button } from './FormaStyled';
import { addContact } from 'redux/operations';

export const Forma = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleChangeInput = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const searchedContact = contacts.find(contact => contact.name === name);

    if (searchedContact) {
      toast.error(`${searchedContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, phone }));

    if (error) {
      toast.error(`${name} not added`);
    }
    toast.success(`${name} added to contacts`);

    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="nameId">
        Name
        <Input
          id="nameId"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeInput}
          placeholder=" "
        />
      </Label>

      <Label htmlFor="telId">
        Phone
        <Input
          id="telId"
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeInput}
          placeholder=" "
        />
      </Label>

      <Button type="submit">Add contact</Button>
      <Toaster />
    </Form>
  );
};
