// import {expect} from "chai";
import {ethers} from "hardhat";

/*
 * @see https://docs.uniswap.org/protocol/reference/deployments
*/
const FACTORY = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
const TOKEN_0 = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const TOKEN_1 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const DECIMALS_1 = BigInt('18n');
const FEE = 3000; // 0.3%

describe("UniswapV3Twap", () => {
  it("Get price", async () => {
    const UniswapV3Twap = await ethers.getContractFactory("UniswapV3Twap");
    const twap = await UniswapV3Twap.deploy(FACTORY, TOKEN_0, TOKEN_1, FEE);
    await twap.deployed();

    const price = await twap.estimateAmountOut(TOKEN_1, BigInt('10n') ** DECIMALS_1, 10);
    console.log(`price: ${price}`);
  });
});