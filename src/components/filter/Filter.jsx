import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <FilterWrapper>
      <FilterLabel>
        Find contacts by name/number
        <FilterInput type="text" value={value} onChange={onChange} />
      </FilterLabel>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
