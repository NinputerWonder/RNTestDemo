/**
 * @format
 */

import {Alert, Button} from 'react-native';
import React from 'react';
import ButtonsView from '../ButtonsView';
import {it, expect} from '@jest/globals';
import {render, screen, fireEvent} from '@testing-library/react-native';

it('renders correctly', () => {
    const alert = jest.spyOn(Alert, 'alert');

    render(<ButtonsView />);
    const elements = screen.getAllByText('Press me');
    expect(elements).toHaveLength(3);

    fireEvent.press(elements[0]);
    expect(alert).toHaveBeenCalledTimes(1);
    expect(alert).toBeCalledWith('Simple Button pressed');

    alert.mockReset();
    fireEvent.press(elements[1]);
    expect(alert).toHaveBeenCalledTimes(1);
    expect(alert).toBeCalledWith('Button with adjusted color pressed');

    expect(elements[2].props.disabled).toBeTruthy();
    alert.mockReset();
    expect(alert).toHaveBeenCalledTimes(0);

    const buttons = screen.getAllByRole('button', {name: /button/});
    expect(buttons.length).toBe(2);
    // console.log( buttons[0]);
    // console.log( buttons[0].props);
    // console.log( buttons[0].props.children[0].props);

    // buttons[0].query

    // expect(buttons[0]).toHaveT('Left Button');

    // expect(buttons[0].props.title).toBe('Left button');
    // expect(buttons[1].props.title).toBe('Right button');
});
