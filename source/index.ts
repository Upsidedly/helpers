import {webcrypto} from 'crypto';

/**
 * Contains logical operations.
 * @module logic
 */
export const logic = {
	/**
     * Performs the XOR (EXCLUSIVE OR) operation on two values.
     *
     * @param {unknown} a - The first value to XOR.
     * @param {unknown} b - The second value to XOR.
     * @returns {boolean} The result of the XOR operation.
     */
	xor(a: unknown, b: unknown): boolean {
		return Boolean((a && !b) || (!a && b));
	},
	/**
     * Performs the NOR (NOT OR) operation on two values.
     *
     * @param {unknown} a - The first value to NOR.
     * @param {unknown} b - The second value to NOR.
     * @returns {boolean} The result of the NOR operation.
     */
	nor(a: unknown, b: unknown): boolean {
		return !(a || b);
	},
	/**
     * Performs the XNOR (EXCLUSIVE NOT OR) operation on two values.
     *
     * @param {unknown} a - The first value to XNOR.
     * @param {unknown} b - The second value to XNOR.
     * @returns {boolean} The result of the XNOR operation.
     */
	xnor(a: unknown, b: unknown): boolean {
		return a === b;
	},
	/**
     * Performs the NAND (NOT AND) operation on two values.
     *
     * @param {unknown} a - The first value to NAND.
     * @param {unknown} b - The second value to NAND.
     * @returns {boolean} The result of the NAND operation.
     */
	nand(a: unknown, b: unknown): boolean {
		return !(a && b);
	},
} as const;

export const {xor, nor, xnor, nand} = logic;
/**
 * A module for generating random secure values
 * @module random
 */
export const random = {

	/**
     * Generates a random integer between a minimum value and an optional maximum value.
     * @param {number} min - The minimum value of the random integer (inclusive).
     * @param {number} [max] - The maximum value of the random integer (exclusive). If not provided, defaults to min = 0 and max = min.
     * @returns {number} - The generated random integer.
     * @throws {TypeError} - If the provided arguments are not of type number.
     */
	int(min: number, max?: number): number {
		if ((!Number.isInteger(min))
            || (max && !Number.isInteger(max))
		) {
			throw new TypeError('Min/Max has to be of type number');
		}

		if (!max) {
			max = min;
			min = 0;
		}

		return Math.floor(this.next() * max) + min;
	},

	/**
     * Generates a random number between 0 (inclusive) and 1 (exclusive)
     * @returns {number} - The generated random number.
     */
	next(): number {
		return webcrypto.getRandomValues(new Uint32Array(1))[0] / (2 ** 32);
	},

	pick<T>(array: T[]): T {
		return array[this.int(array.length)];
	},
};

