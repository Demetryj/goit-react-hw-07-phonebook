import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';
import { Label, Input } from './FilterStyled';

export const Filter = () => {
  const valueFilter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Label htmlFor="filterId">
      Find contacts by name
      <Input
        id="filterId"
        type="text"
        name="filter"
        value={valueFilter}
        onChange={onChangeFilter}
        placeholder=" "
      />
    </Label>
  );
};
