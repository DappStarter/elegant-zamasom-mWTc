require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth trumpet color gesture opinion swap gesture'; 
let testAccounts = [
"0x6f759b445ab947494ff463f3a7ec5669678920e0d392ba182ff424f085c13ed3",
"0xbb9be4c791df790d8c0590f2018392906d82f61eeb8de46018265dd92d7bd9a7",
"0x5653018221c0cf28e968107c21dc156f0616e7693a4001d51244f5cb76e5a4c7",
"0xbe351daa413a9c8d6cb8a22e3fabdfe9dca4bab4406557eb3837e44bc9269e32",
"0x4c78e69cf4b9e8fb036f019a81aca58edf7b72203864947e0681cb843b1576fe",
"0x484c2b847487f702ce36d6fe4348dcc2c245ac98d43f09890e6b9f1546292684",
"0x9172726e32c54ea7d844684f668bb8dcdb3988f0fe52e887795bffb714916c29",
"0xc9deeadaedbf6b4ea91098ca76c121d1cb7218037c9fa49c5ab32a82fc3e0f1e",
"0x25ddb93846cbffe86de00b56cb7bd1bacacde0b1859acea5bf6ac2aeee6afe8b",
"0x6f241c69e526bc4f85c8aabed1cb5ab6c656a7c0dc283c1dccf19207c10ad364"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


