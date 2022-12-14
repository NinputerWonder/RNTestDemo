import * as React from 'react';
import QuestionsBoard from './QuestionsBoard';
import {render, fireEvent} from '@testing-library/react-native';
import {describe, test, jest, expect} from '@jest/globals';
import renderer from 'react-test-renderer'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('QuestionsBoard tests', () => {
    test('QuestionsBoard snapshot', () => {
        const allQuestions = ['q1', 'q2'];
        const mockFn = jest.fn();
        const tree = renderer.create(<QuestionsBoard questions={allQuestions} onSubmit={mockFn}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('form submits two answers', () => {
        const allQuestions = ['q1', 'q2'];
        const mockFn = jest.fn();

        const {getAllByLabelText, getByText} = render(
            <QuestionsBoard questions={allQuestions} onSubmit={mockFn}/>
        );

        const answerInputs = getAllByLabelText('answer input');

        fireEvent.changeText(answerInputs[0], 'a1');
        fireEvent.changeText(answerInputs[1], 'a2');
        fireEvent.press(getByText('Submit'));

        expect(mockFn).toHaveBeenCalledWith({
            '1': {q: 'q1', a: 'a1'},
            '2': {q: 'q2', a: 'a2'},
        });
    });


});
