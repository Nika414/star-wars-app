/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { useSelector } from 'react-redux';

export default function Filter() {
  const cards = useSelector((state) => state.cards.cards);
  const eyeColor = Array.from(new Set(cards.map((card) => card.eye_color)));

  const [isChecked, setIsChecked] = useState(undefined);
  return (
    <div className="filter">
      <span className="filter__name">Color eye</span>
      <Menu
        className="filter__menu"
        menuButton={<MenuButton className="filter__menu-button">All</MenuButton>}
        transition
      >
        {eyeColor.map((color) => (
          <MenuItem
            type="checkbox"
            key={uuid()}
            className="filter__menu-item"
            onClick={() => console.log(1)}
          >
            {color}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
