// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ccip_sepolia_polygonmumbai.sol";

contract LiquidationAlert {
    // Instance of the imported contract
    Messenger public ccipReceiver;

    // Event declaration to emit the liquidation details
    event LiquidationDetails(bytes32 messageId, string text);

    // Constructor to set the instance of the imported contract using its address
    constructor(address _ccipContractAddress) {
        ccipReceiver = Messenger(payable(_ccipContractAddress));
    }

    // Function to get and emit the last received message details
    function emitLastReceivedMessageDetails() public {
        // Call the getLastReceivedMessageDetails function from the Messenger contract and get the results
        (bytes32 messageId, string memory text) = ccipReceiver.getLastReceivedMessageDetails();
        
        // Emit the event with the fetched details
        emit LiquidationDetails(messageId, text);
    }

    // Function to read and return the last received message details
    function getLastReceivedMessageDetails() public view returns (bytes32 messageId, string memory text) {
        // Call the getLastReceivedMessageDetails function from the Messenger contract and get the results
        return ccipReceiver.getLastReceivedMessageDetails();
    }

    // ... more functions to interact with the Messenger contract
}
