import onboard from './onboard'
import '../css/styles.css'

const $connect = document.querySelector('.connect-button')
const $disconnect = document.querySelector('.disconnect-button')
const $wallet = document.querySelector('.wallet')
const $disconnected = document.querySelector('.disconnected')
const $address = document.querySelector('.address')
const $label = document.querySelector('.label')

let label

const connect = async () => {
  return await onboard.connectWallet()
}

const disconnect = () => {
  onboard.disconnectWallet({ label })
}

const addConnectedInfo = connectedAccount => {
  const address = connectedAccount.address
  const ENS = connectedAccount.ens
  if (ENS == null){
  console.log("addConnectedAccount: " + JSON.stringify(connectedAccount))
  const start = address.slice(0, 5)
  const end = address.slice(-5, -1)
  $address.innerHTML = `${start}.....${end}`
  //$label.innerHTML = `Connected Wallet: ${label}`
  } else {
  $address.innerHTML =  ENS
  }
}

$connect.addEventListener('click', async _ => {
  const wallets = await connect()
  if (wallets[0]) {
    const connectedAccount = wallets[0].accounts[0]
    label = wallets[0].label
    //console.log(JSON.stringify(decycle(wallets[0])))
    addConnectedInfo(connectedAccount)
    $wallet.classList.remove('hidden')
    $disconnected.classList.add('hidden')
  }
})

$disconnect.addEventListener('click', _ => {
  disconnect()
  $wallet.classList.add('hidden')
  $disconnected.classList.remove('hidden')
})

//recognition of automatic connect on page load and updating of button to reflect connected state
const state = onboard.state.select();
const { unsubscribe } = state.subscribe(function(update){
  if (update.wallets[0]) {
    const connectedAccount = update.wallets[0].accounts[0]
    label = update.wallets[0].label
    addConnectedInfo(connectedAccount)
    $wallet.classList.remove('hidden')
    $disconnected.classList.add('hidden')
  } 
  console.log('state update: ', update)
});

// to allow viewing const wallets
function decycle(obj, stack = []) {
  if (!obj || typeof obj !== 'object')
      return obj;
  
  if (stack.includes(obj))
      return null;

  let s = stack.concat([obj]);

  return Array.isArray(obj)
      ? obj.map(x => decycle(x, s))
      : Object.fromEntries(
          Object.entries(obj)
              .map(([k, v]) => [k, decycle(v, s)]));
}

//



