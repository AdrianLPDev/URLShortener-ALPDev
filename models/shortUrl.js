const mongoose = require('mongoose');
const { customAlphabet } = require('nanoid');
const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nanoid = customAlphabet(alphabet, 10);
// const shortUrl = require('customRandom');
// const { nanoid, customRandom } = require('nanoid');


// const rng = seedrandom(seed);
// const shortId = customRandom('abcdef', 10, size => {
//     return (new Uint8Array(size)).map(() => 256 * rng())
//   });
  

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: () => nanoid()
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);