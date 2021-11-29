import React from 'react';
import { fireEvent, render, act } from '@testing-library/react-native';
import { Alert } from 'react-native';
import PokeListApp from '../../PokeListApp';
import { PokemonResponse } from '../../../__mocks__/PokemonResponse.mock';
import { TYPE_COLORS } from '../../constants';

jest.spyOn(Alert, 'alert');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(PokemonResponse),
  }),
) as jest.Mock;

describe('Card renders correctly', () => {
  it('cards show correct pokemon name from api call', async () => {
    const { findAllByText } = render(<PokeListApp />)

    const elements = await findAllByText('Bulbasaur');
    expect(elements[0]).toBeDefined();
  })
  it('cards render with an image', async () => {
    const { findAllByTestId } = render(<PokeListApp />)

    const elements = await findAllByTestId('pokemonImg');
    expect(elements[0]).toBeDefined();
  })
  it('cards render with the correct id', async () => {
    const { findAllByText } = render(<PokeListApp />)

    const elements = await findAllByText('1');
    expect(elements[0]).toBeDefined();
  })
  it('cards render with the correct type', async () => {
    const { findAllByTestId } = render(<PokeListApp />)

    const elements = await findAllByTestId('type');
    const children = elements[0].children;
    expect(children[1]).toBe('Grass');
  })
  it('cards render with the correct height', async () => {
    const { findAllByTestId } = render(<PokeListApp />)

    const elements = await findAllByTestId('height');
    const children = elements[0].children;
    expect(children[1]).toBe('7');
  })
  it('cards render with the correct weight', async () => {
    const { findAllByTestId } = render(<PokeListApp />)

    const elements = await findAllByTestId('weight');
    const children = elements[0].children;
    expect(children[1]).toBe('69');
  })
})