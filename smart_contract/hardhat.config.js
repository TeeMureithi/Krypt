// https://eth-sepolia.g.alchemy.com/v2/OfSkKW63SkSBv3jMCNYsptoEYmewAugr

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/OfSkKW63SkSBv3jMCNYsptoEYmewAugr',
      accounts: ['cfb90ab6ab870c1ff91ebb107f98e32f7f9085230ce51491ef854d898fd096a3']
    }
  }


}