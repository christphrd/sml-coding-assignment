const assert = require('assert');
const coinCombo = require('./assets/js/coinCombo.js');

describe('Coins combination dummy func', () => {
    it('should return true', () => {
        assert.strictEqual(coinCombo(), true)
    })
})