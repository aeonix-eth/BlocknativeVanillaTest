import Onboard from '@web3-onboard/core'
import injectedWalletsModule from '@web3-onboard/injected-wallets'
//import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseModule from '@web3-onboard/coinbase'
import bitgetModule from '@web3-onboard/bitget'
//import ledgerModule from '@web3-onboard/ledger'


const injected = injectedWalletsModule()
//const ledger = ledgerModule()
//const walletConnect = walletConnectModule({})
const coinbaseWallet = coinbaseModule()
const bitgetWallet = bitgetModule()

const wallets = [injected, coinbaseWallet, bitgetWallet]
//const wallets = [injected, ledger, walletConnect, bitgetWallet, coinbaseWallet] old

const chains = [
  {
    id: 1,
    token: 'ETH',
    label: 'Ethereum Mainnet',
    rpcUrl: `https://rpc.flashbots.net`
  },
  {
    id: '0x2105',
    token: 'ETH',
    label: 'Base',
    rpcUrl: 'https://mainnet.base.org'
  },
  {
    id: '0xaa36a7',
    token: 'ETH',
    label: 'Sepolia',
    rpcUrl: 'https://ethereum-sepolia-rpc.publicnode.com'
  },
  {
    id: '0x138d5',
    token: 'BERA',
    label: 'Berachain',
    rpcUrl: 'https://artio.rpc.berachain.com'
  },
  {
    id: 137,
    token: 'MATIC',
    label: 'Polygon PoS',
    rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
  }
]

const appMetadata = {
  name: 'Roundtable',
  icon: 'img/logo.png',
  logo: 'img/logo.png',
  description: 'Stake Your Seat',
  recommendedInjectedWallets: [
    { name: 'MetaMask', url: 'https://metamask.io' },
    { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
    
  ]
}

const connect = {
  showSidebar: true,
  disableClose: false,
  autoConnectLastWallet: true,
  autoConnectAllPreviousWallet: true
}

let onboard

if (!onboard) {
  onboard = Onboard({
    wallets,
    chains,
    appMetadata,
    connect
    
  })
}

export default onboard
