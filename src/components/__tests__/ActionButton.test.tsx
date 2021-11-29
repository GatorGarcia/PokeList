import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
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
  

describe('ActionButton renders correctly', () => {
    it('screen render a card with an Action button', async () => {
        const { findAllByText } = render(<PokeListApp />)

        const elements = await findAllByText('Action');
        expect(elements[0]).toBeDefined();
    })
    it('pressing the Action button launches the expected text', async () => {
        const { findAllByText } = render(<PokeListApp />)

        const elements = await findAllByText('Action');
        fireEvent(elements[0], 'onPress');
        expect(Alert.alert).toHaveBeenCalledWith('BULBASAUR used RAZOR-WIND')
    })
    it('renders with white text', async () => {
        const { findAllByText } = render(<PokeListApp />)

        const elements = await findAllByText('Action');
        const textColor = elements[0].props.style.color;
        expect(textColor).toBe('white')
    })
    it('renders with correct color', async () => {
        const { findAllByText } = render(<PokeListApp />)

        const elements = await findAllByText('Action');
        const backgroundColor = elements[0].parent.props.style[1].backgroundColor;
        expect(backgroundColor).toBe(TYPE_COLORS['Grass'])
    })
})