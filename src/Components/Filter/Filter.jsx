/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MultiSelect } from 'react-multi-select-component';
import { filterStatusChanged } from '../../store/filterSlice';

export default function Filter() {
  const [initState, setInitState] = useState(true);
  const eyeColors = useSelector((state) =>
    state.cards.cards.map((item) => item.eye_color)
  );
  const options = Array.from(new Set(eyeColors)).map((item) => ({
    label: item,
    value: item,
  }));

  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();

  function onChange(data) {
    if (initState) {
      setInitState(false);
    }
    if (data.length === 0) {
      setInitState(true);
    }
    setSelected(data);
    dispatch(filterStatusChanged(data.map((item) => item.value)));
  }

  return (
    <div className="filter">
      <span className="filter__name">Color eye</span>
      <MultiSelect
        options={options}
        disableSearch
        value={initState ? options : selected}
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
