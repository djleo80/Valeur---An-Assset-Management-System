import { makeContractCall, broadcastTransaction, uintCV, standardPrincipalCV } from '@stacks/transactions';
import { StacksTestnet } from '@stacks/network';

const network = new StacksTestnet();

async function mintStamp(id, owner) {
  const txOptions = {
    contractAddress: 'ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA',
    contractName: 'asset-stamp',
    functionName: 'mint-stamp',
    functionArgs: [uintCV(id), standardPrincipalCV(owner)],
    senderKey: 'sender-private-key',
    network,
  };

  const transaction = await makeContractCall(txOptions);
  const response = await broadcastTransaction(transaction, network);
  return response;
}

async function sendStamp(id, recipient) {
  const txOptions = {
    contractAddress: 'ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA',
    contractName: 'asset-stamp',
    functionName: 'send-stamp',
    functionArgs: [uintCV(id), standardPrincipalCV(recipient)],
    senderKey: 'sender-private-key',
    network,
  };

  const transaction = await makeContractCall(txOptions);
  const response = await broadcastTransaction(transaction, network);
  return response;
}

async function receiveStamp(id, sender) {
  const txOptions = {
    contractAddress: 'ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA',
    contractName: 'asset-stamp',
    functionName: 'receive-stamp',
    functionArgs: [uintCV(id), standardPrincipalCV(sender)],
    senderKey: 'recipient-private-key',
    network,
  };

  const transaction = await makeContractCall(txOptions);
  const response = await broadcastTransaction(transaction, network);
  return response;
}

// Usage
mintStamp(1, 'SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB');
sendStamp(1, 'SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB');
receiveStamp(1, 'SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB');