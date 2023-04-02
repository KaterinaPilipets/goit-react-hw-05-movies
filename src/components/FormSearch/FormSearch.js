import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import {
  Form,
  SearchbarContainer,
  SearchInput,
  Button,
} from './FormSearch.styled';
// import { ImSearch } from 'react-icons/im';
const FormSearch = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';
  const [value, setValue] = useState(search);
  const onChange = e => {
    setValue(e.currentTarget.value.trim());
  };
  const handleSubmit = e => {
    e.preventDefault();
    value ? onSubmit(value) : console.log('Enter data in the search field!');
  };

  return (
    <SearchbarContainer>
      <Form onSubmit={handleSubmit}>
        <SearchInput
          onChange={onChange}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <Button type="submit">Search</Button>
      </Form>
    </SearchbarContainer>
  );
};
export default FormSearch;

FormSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
