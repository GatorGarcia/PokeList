import React from 'react';
import { render } from '@testing-library/react-native';
import { Alert } from 'react-native';
import PokeListApp from '../../PokeListApp';
import { PokemonResponse } from '../../../__mocks__/PokemonResponse.mock';

jest.spyOn(Alert, 'alert');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(PokemonResponse),
  }),
) as jest.Mock;
  

describe('LoadingIndicator renders correctly', () => {
    it('screen renders loading indicator before API call', () => {
        const { getByText } = render(<PokeListApp />)

        const element = getByText('Loading');
        expect(element).toBeDefined();
    })
})