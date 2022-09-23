/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-23 13:51:23
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-23 16:47:57
 * @FilePath: \hardhat-tutorial\hardhat.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: 'X4CG195DXBAA2GBWFH9RDD89T31RJJG9GJ'
  }
};