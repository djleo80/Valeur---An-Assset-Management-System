import React from "react";
import ReactDOMClient from "react-dom/client";
import { Frame } from "./screens/Frame";
import { makeContractCall, broadcastTransaction, uintCV, standardPrincipalCV } from '@stacks/transactions';
import { StacksTestnet } from '@stacks/network';

const network = new StacksTestnet();

async function sendAllStamps(sellerPrivateKey, buyerAddress, nfts) {
    console.log("SAS deployed")
  for (let i = 0; i < nfts.length; i++) {
    const txOptions = {
      contractAddress: 'ST3J2GVMMM2R07ZFBJDWTYEYAR8FZH5WKDTFJ9AHA',
      contractName: 'asset-stamp',
      functionName: 'send-stamp',
      functionArgs: [uintCV(nfts[i].id), standardPrincipalCV(buyerAddress)],
      senderKey: sellerPrivateKey,
      network,
    };

    const transaction = await makeContractCall(txOptions);
    const response = await broadcastTransaction(transaction, network);
    console.log(response);
  }
}

function SellButton({ sellerPrivateKey, buyerAddress, nfts }) {
  return (
    <button onClick={() => sendAllStamps(sellerPrivateKey, buyerAddress, nfts)}>
      Sell Item
    </button>
  );
}

export default SellButton;

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Frame />);
