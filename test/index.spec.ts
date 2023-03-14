import {expect, assert} from 'chai';
import {logic, random} from '../source/index.js';

describe('module - logic', () => {
	describe('xor', () => {
		it('should return true with inputs: false, true and inputs: 0, 1', () => {
			expect(logic.xor(false, true)).to.be.equal(true);
			expect(logic.xor(0, 1)).to.be.equal(true);
		});

		it('should return true with inputs: true, false and inputs: 1, 0', () => {
			expect(logic.xor(true, false)).to.be.equal(true);
			expect(logic.xor(1, 0)).to.be.equal(true);
		});

		it('should return false with inputs: true, true and inputs: 1, 1', () => {
			expect(logic.xor(true, true)).to.be.equal(false);
			expect(logic.xor(1, 1)).to.be.equal(false);
		});

		it('should return false with inputs: false, false and inputs: 0, 0', () => {
			expect(logic.xor(false, false)).to.be.equal(false);
			expect(logic.xor(0, 0)).to.be.equal(false);
		});
	});

	describe('nor', () => {
		it('should return false with inputs: false, true and inputs: 0, 1', () => {
			expect(logic.nor(false, true)).to.be.equal(false);
			expect(logic.nor(0, 1)).to.be.equal(false);
		});

		it('should return false with inputs: true, false and inputs: 1, 0', () => {
			expect(logic.nor(true, false)).to.be.equal(false);
			expect(logic.nor(1, 0)).to.be.equal(false);
		});

		it('should return false with inputs: true, true and inputs: 1, 1', () => {
			expect(logic.nor(true, true)).to.be.equal(false);
			expect(logic.nor(1, 1)).to.be.equal(false);
		});

		it('should return true with inputs: false, false and inputs: 0, 0', () => {
			expect(logic.nor(false, false)).to.be.equal(true);
			expect(logic.nor(0, 0)).to.be.equal(true);
		});
	});

	describe('xnor', () => {
		it('should return false with inputs: false, true and inputs: 0, 1', () => {
			expect(logic.xnor(false, true)).to.be.equal(false);
			expect(logic.xnor(0, 1)).to.be.equal(false);
		});

		it('should return false with inputs: true, false and inputs: 1, 0', () => {
			expect(logic.xnor(true, false)).to.be.equal(false);
			expect(logic.xnor(1, 0)).to.be.equal(false);
		});

		it('should return true with inputs: true, true and inputs: 1, 1', () => {
			expect(logic.xnor(true, true)).to.be.equal(true);
			expect(logic.xnor(1, 1)).to.be.equal(true);
		});

		it('should return true with inputs: false, false and inputs: 0, 0', () => {
			expect(logic.xnor(false, false)).to.be.equal(true);
			expect(logic.xnor(0, 0)).to.be.equal(true);
		});
	});

	describe('nand', () => {
		it('should return true with inputs: false, true and inputs: 0, 1', () => {
			expect(logic.nand(false, true)).to.be.equal(true);
			expect(logic.nand(0, 1)).to.be.equal(true);
		});

		it('should return true with inputs: true, false and inputs: 1, 0', () => {
			expect(logic.nand(true, false)).to.be.equal(true);
			expect(logic.nand(1, 0)).to.be.equal(true);
		});

		it('should return false with inputs: true, true and inputs: 1, 1', () => {
			expect(logic.nand(true, true)).to.be.equal(false);
			expect(logic.nand(1, 1)).to.be.equal(false);
		});

		it('should return true with inputs: false, false and inputs: 0, 0', () => {
			expect(logic.nand(false, false)).to.be.equal(true);
			expect(logic.nand(0, 0)).to.be.equal(true);
		});
	});
});

describe('module - random', () => {
	describe('int', () => {
		it('should generate random numbers >= 0 and < max with input: 100', () => {
			expect(Array.from({length: 1000}, () => random.int(100)).every(n => n >= 0 && n < 100)).to.be.equal(true);
		});
	});

	describe('next', () => {
		it('should generate random numbers >= 0 and < 1', () => {
			expect(Array.from({length: 1000}, () => random.next()).every(n => n >= 0 && n < 1)).to.be.equal(true);
		});
	});

	describe('pick', () => {
		it('should pick elements from an array with near equality (10,000 runs)', () => {
			const a = [1, 2, 3, 4];
			const b = [0, 0, 0, 0];
			for (let i = 0; i < 10000; i++) {
				const pick = random.pick(a);
				a.forEach((v, i) => {
					if (pick === v) {
						b[i] += 1;
					}
				});
			}

			expect(b.every(n => n <= 2600 && n >= 2400)).to.be.equal(true);
		});
	});
});
