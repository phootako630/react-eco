import {getCompleteTodos} from "../selectors";
import { expect } from "chai";

describe('The getCompleteTodos selector', () => {
    it('Return only complete todos', () => {
        const fakeTodos = [{
            text: 'Say Hello',
            isCompleted: true,
        }, {
            text: 'Say Goodbye',
            isCompleted: false,
        }, {
            text: 'Go find a job',
            isCompleted: false,
        }
        ];
        const expected = [{
            text: 'Say Hello',
            isCompleted: true,
        }];
        const actual = getCompleteTodos.resultFunc(fakeTodos);
        expect(actual).to.deep.equal(expected);
    })
})