import { expect } from "chai";
import {getBorderStyleForDate} from "../TodoListItem";

describe('getBorderStyleForDate', () => {
    it('return none when the date is less than five days ago', () => {
        const today = Date.now();
        const recentDay = new Date(Date.now() - 8640000 * 3);

        const expected = 'none';
        const actual = getBorderStyleForDate(recentDay, today);

        expect(actual).to.equal(expected);

    });

    it('return border 2px solid red when the date is more than five days ago', () => {
        const today = Date.now();
        const recentDay = new Date(Date.now() - 8640000 * 7);

        const expected = '2px solid red';
        const actual = getBorderStyleForDate(recentDay, today);

        expect(actual).to.equal(expected);

    });
})