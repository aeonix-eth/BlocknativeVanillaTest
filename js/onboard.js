import Onboard from '@web3-onboard/core'
import injectedWalletsModule from '@web3-onboard/injected-wallets'
//import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseModule from '@web3-onboard/coinbase'
import bitgetModule from '@web3-onboard/bitget'

const injected = injectedWalletsModule()
//const walletConnect = walletConnectModule({})
const coinbaseWallet = coinbaseModule()
const bitgetWallet = bitgetModule()

const wallets = [injected, bitgetWallet, coinbaseWallet]
//const wallets = [injected, walletConnect, bitgetWallet, coinbaseWallet] old

const chains = [
  {
    id: 1,
    token: 'ETH',
    label: 'Ethereum Mainnet',
    rpcUrl: `https://rpc.flashbots.net`
  },
  {
    id: 137,
    token: 'MATIC',
    label: 'Polygon PoS',
    rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
  },
  {
    id: '0x2105',
    token: 'ETH',
    label: 'Base',
    rpcUrl: 'https://mainnet.base.org'
  },
  {
    id: '0xa4ec',
    token: 'ETH',
    label: 'Celo',
    rpcUrl: 'https://1rpc.io/celo'
  },
  {
    id: 666666666,
    token: 'DEGEN',
    label: 'Degen',
    rpcUrl: 'https://rpc.degen.tips'
  }
]

const appMetadata = {
  name: 'Roundtable',
  icon: 'logo.png',
  logo: 'logo.png',
  description: 'Stake Your Seat',
  recommendedInjectedWallets: [
    { name: 'MetaMask', url: 'https://metamask.io' },
    { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
    
  ]
}

const connect = {
  showSidebar: true,
  disableClose: false,
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
