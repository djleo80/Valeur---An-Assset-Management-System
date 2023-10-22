import { makeContractCall, broadcastTransaction, StacksTestnet } from '@stacks/transactions';
import { standardPrincipalCV, uintCV } from '@stacks/transactions';
import { StacksAccount } from '@stacks/network';

function App() {
  const privateKey = process.env.PRIVATE_KEY;
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const contractName = process.env.CONTRACT_NAME;


  const mintNFT = async () => {
    const privateKey = 'your-private-key';
    const recipient = 'recipient-address';
    const nftId = 1; // Replace with the ID of the NFT you want to mint

    const network = new StacksTestnet();
    const senderAddress = new StacksAccount(privateKey).address;

    const transaction = await makeContractCall({
      contractAddress: senderAddress,
      contractName: 'my-nft-contract',
      functionName: 'mint-my-nft',
      functionArgs: [standardPrincipalCV(recipient), uintCV(nftId)],
      senderKey: privateKey,
      network,
    });

    const result = await broadcastTransaction(transaction, network);
    console.log(result);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl">Hello Stacks</h1>
      <button onClick={mintNFT}>Mint NFT</button>
    </div>
  );
}

export default App;