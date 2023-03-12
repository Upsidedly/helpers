import {expect} from 'chai';
import {logic} from './index.js';

describe('logic', () => {
	describe('xor', () => {
		it('should return true with inputs: false, true', () => {
			expect(logic.xor(false, true)).to.be.equal(true);
		});
	});
});
