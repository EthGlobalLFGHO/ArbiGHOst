import "./IGhoFlashMinter.sol";
import "./LiquidationData.sol";

contract GhoLiquidator {

	constructor(address _aavePoolAddress, address _ghoFlashMintAddress) {
		aavePool = IPool(_aavePoolAddress);
		ghoFlashMinter = IGhoFlashMinter(_ghoFlashMintAddress);
	}

     //TODO find address user contract on AavePoolV3 to liquidate
     //TODO find address collatoralToken to liquidate
     //TODO find find unit amount to liquidate


    function mintAndLiquidate(address _user, address _collatoralToken, uint amount){
        bytes memory data = abi.encode(LiquidationData(_user, _collatoralToken, _amount))
        ghoFlashMinter.flashLoan(
            receiver,
            token,
            amount,
            data
        )
    }
}
