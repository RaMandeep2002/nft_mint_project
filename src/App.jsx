import { useState, useEffect } from 'react';
import './App.css';

// import ethers from 'ethers';

function App() {
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);
  const connectWallet = async () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (error) {
        console.error(error.message);
      }
    } else {
      alert('Please Install Metamask!');
    }
  };
  const disconnectWallet = async () => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      try {
        await window.ethereum.request({
          method: 'wallet_requestPermissions',
          params: [
            {
              eth_accounts: {},
            },
          ],
        });
        setWalletAddress('');
      } catch (error) {
        console.error(error.message);
      }
    } else {
      alert('Please Install Metamask!');
    }
  };
  const getCurrentWalletConnected = async () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          // console.log(accounts[0]);
        } else {
          console.log('Connect to MetaMask using the Connect button');
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log('Please install MetaMask');
    }
  };
  const addWalletListener = async () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      window.ethereum.on('accountsChanged', (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress('');
      console.log('Please install MetaMask');
    }
  };
  return (
    <>
    <video autoPlay loop muted >
      <source src={backgroundvideo} type='video/mp4'/>
    </video>
      <div>
        <div className="mt-4 flex justify-center items-center gap-3">
          <p className="text-3xl  font-bold leading-normal tracking-normal ml-4 bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">
            ANRYTON Nft Contract Deploy
          </p>
          <button className="w-auto h-[25px] p-5  bg-gradient-to-r from-amber-600 to-pink-600 rounded-[30px] justify-center items-center gap-2 inline-flex">
            <span
              className="text-white text-md font-medium leading-normal tracking-wide"
              onClick={
                walletAddress && walletAddress.length > 0
                  ? disconnectWallet
                  : connectWallet
              }
            >
              {walletAddress && walletAddress.length > 0
                ? `${walletAddress}`
                : 'Connect Wallet'}
            </span>
          </button>
        </div>

        {/* <br /> */}
        <div className="flex mr-5 justify-center">
          <div className="ml-4">
            <form className="w-[30rem] mt-4 p-8 border border-gray-600 rounded-3xl">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium tracking-wide text-gray-600"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 border rounded-md border-gray-600 w-full"
                  placeholder="Enter the address you want to verify"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium tracking-wide text-gray-600"
                >
                  Ammount
                </label>
                <input
                  type="number"
                  id="name"
                  className="mt-1 p-2 border rounded-md border-gray-600 w-full"
                  placeholder="Enter the amount"
                />
              </div>

              <button
                type="button"
                className="w-auto h-[25px] p-5 ml-4 bg-gradient-to-r from-amber-600 to-pink-600 rounded-[30px] justify-center items-center gap-2 inline-flex"
              >
                <span className="text-white text-md font-medium  tracking-wide">
                  Approve 🪙
                </span>
              </button>
            </form>
          </div>

          <div className="ml-4">
            <form className="w-[30rem] mt-4 p-8 border border-gray-600 rounded-3xl">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium tracking-wide text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 border rounded-md border-gray-600 w-full"
                  placeholder="Enter the nft name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium tracking-wide text-gray-600"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  id="description"
                  className="mt-1 p-2 border rounded-md border-gray-600 w-full"
                  placeholder="Enter a decrption of NFT"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-600"
                >
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  className="mt-1 p-2 border rounded-md border-gray-600 w-full"
                  placeholder="Enter a Amount of NFT"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-600"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="mt-1 p-2 border rounded-md border-gray-600 w-full"
                  placeholder="Enter a Quantity"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="baseTokenURI"
                  className="block text-sm font-medium text-gray-600"
                >
                  Base Token URI 🔗
                </label>
                <input
                  type="text"
                  id="baseTokenURI"
                  className="mt-1 p-2 border rounded-md border-gray-600 w-full"
                  placeholder="Enter a Base URI"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="amountProvider"
                  className="block text-sm font-medium text-gray-600"
                >
                  Amount Provider
                </label>
                <input
                  type="text"
                  id="amountProvider"
                  className="mt-1 p-2 border rounded-md border-gray-600 w-full"
                  placeholder="Enter a address Amount Provider"
                />
              </div>

              <button
                type="button"
                className="w-auto h-[25px] p-5 ml-4 bg-gradient-to-r from-amber-600 to-pink-600 rounded-[30px] justify-center items-center gap-2 inline-flex"
              >
                <span className="text-white text-md font-medium  tracking-wide">
                  CreateNft 🛠️
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
