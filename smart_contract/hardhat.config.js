require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/06SOqrnRj5AWCA7yk1tSwK0ooGYpqBiT",
      accounts: [
        "16f547d457ddc65f7e4c0880a77456a07689da52b59f7e7c44955cca82fdc6e7"
      ]
    }
  }
};
