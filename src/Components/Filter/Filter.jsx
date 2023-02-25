/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MultiSelect } from 'react-multi-select-component';
import { filterStatusChanged } from '../../store/filterSlice';

export default function Filter() {
  const eyeColors = useSelector((state) => state.cards.cards.map((item) => item.eye_color));

  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();

  function onChange(data) {
    setSelected(data);
    dispatch(filterStatusChanged(data.map((item) => item.value)));
  }

  useEffect(() => {
    if (eyeColors.length > 1) {
      const uniqueEyeColors = Array.from(new Set(eyeColors));
      const options = uniqueEyeColors.map((item) => ({ label: item, value: item }));
      setSelected(options);
    }
  }, [eyeColors]);

  return (
    <div className="filter">
      <span className="filter__name">Color eye</span>
      <MultiSelect
        options={selected}
        disableSearch
        value={selected}
        onChange={onChange}
        labelledBy="Select"
        className="filter__menu"
        isLoading={eyeColors.length === 0}
        overrideStrings={{
          allItemsAreSelected: 'All',
          selectAll: 'All',
          selectSomeItems: 'Select',
        }}
      />
    </div>
  );
}
