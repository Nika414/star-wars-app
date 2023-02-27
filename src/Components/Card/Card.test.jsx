/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Card from './Card';

const data = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/6/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/7/',
  ],
  species: [
    'https://swapi.dev/api/species/1/',
  ],
  vehicles: [
    'https://swapi.dev/api/vehicles/14/',
    'https://swapi.dev/api/vehicles/30/',
  ],
  starships: [
    'https://swapi.dev/api/starships/12/',
    'https://swapi.dev/api/starships/22/',
  ],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/',
  tags: [
    {
      info: '112BBY',
      color: '#07D6F2',
    },
  ],
};

const onClick = jest.fn();

describe('Card component', () => {
  it('Card renders', () => {
    render(<Card card={data} />);

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });
  it('Card snapshot', () => {
    const card = render(<Card card={data} />);
    expect(card).toMatchSnapshot();
  });
  it('onChange works', () => {
    render(<Card card={data} onClick={onClick} />);
    field.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
