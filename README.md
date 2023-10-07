# Swisstronik X TechFiesta Challenge

This project is a basic smart contract (SwissFiesta) written in soldity, It is deployed to the Swisstronik EVM Testnet and the Polygon Mumbai Testnet.
The contract has an inittial `private` state variable (SetWinner: string) from deployment that is set by the deployer, the contract also contains 2 functions to set and get the `private` string stored as the state variable (setWinner: string). There is also a getWinner script that returns the stored state variable at location/index 0 using ethers function `getStorageAt()` to return the value from the Swisstronik and Mumbai network.

## Smart Contract deployed on Swisstronik EVM Testnet

```
0x09270CF87bC64022DC0d68423D01b3e509A222A1
```
## Smart Contract deployed on Mumbai

```
0x6421ad2b45bF585069a4Ea6d05a77eeEBc8D8bb7
```


## Usage

Installation Package

```
npm install
```

### Network: Swisstronik

#### `Command`

```shell
npx hardhat run scripts/getWinner.ts --network swisstronik
```

#### `Output`

```shell

Hex =  `0x7160a7d1fe8770222b24bf6496b6ad8638e83443fac6b4226d73d155063c6bcc`
And the Winner is:  q`����p"+$�d����8�4C�ƴ"ms�U<k�
```

### Network: Mumbai 

#### `Command`

```shell
npx hardhat run scripts/getWinner.ts --network mumbai
```

#### `Response`

```shell
Hex =  `0x6761627269656c74656d7473656e00000000000000000000000000000000001c`
And the Winner is:  `gabrieltemtsen`
```



## Conclusion

It seems the Swisstronik blockchain provides privacy in the contract with the private EVM execution using their cutting-edge tech and solutions, Intel SGX
While on the Polygon Mumbai Testnet, even as the state variable was `private`...in the scripts it still returned it's value.
