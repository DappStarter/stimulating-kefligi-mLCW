require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin forest flower sunset'; 
let testAccounts = [
"0x3e22edc217a8d3fcda3a6174055f43ccf2d79c8a2b25c72eea05d39e56f142f3",
"0xc83be976ac9c72b872b15835a360b329845daa5a59eeeef001e37e8be0f999b8",
"0xab0e1b7032eb9bf17d822c2b2ff6a787de07d15aae913c40854d419b1de03fa9",
"0xbcec647681e322c86478e8213dec17d13a36c98579aeebfeefbb47816d950d7f",
"0xfbdc71bdcf1f1bd83d48b9d34fa18a4819802df81142ecd41ca4797418172522",
"0x31ed4c48a73122d767e0d11e027a92cfde99272d04d4a9773a6fa968cf7634c3",
"0xb0296d1d8fbcf1d7a5780ebc60e054cff247bca3e82491dd5c6ddc33adc0efc2",
"0x803db6a2bdfe32dc1f10b7ad4dbe1e96de2208c1b0c612e03526c1f8f1d340f7",
"0x203da51b138f0eb807117aaa59b1bc827502561b4419c5a04299f96436792c4b",
"0x9fc8927d6a4e676364acfcd46e1b741ae2bbedace08a32ca3d93a2b68e036172"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

