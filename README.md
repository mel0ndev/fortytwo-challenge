# FortyTwo Dashboard Challenge

## Assumptions and Notes
#### Pulsar API
I do not have access to the Pulsar API. They require a meeting to be set up in order to get access, and I thought it would take too much time just for access to an api. So instead, I opted to use the free, public Alchemy API that returns similar token data so you can see how I might go about implementing an API, rather than mocking it completely. The one caveat, is that there is no pricing data, and this was mocked using the token balance of the user (which is correct) and a random number. 

#### NextJS
I did not use vanilla react, and I made the assumption that Next would be fine to use since you all use it in production anyways. 

#### Zero Balances 
Zero balances are handled in the code that renders the conditional dashboard, however I believe with the Alchemy API it counts the ETH in your wallet as WETH, and renders this as 0. Given more time, I would implement a button to allow for toggling of showing zero balances or not. I opted to show them here so you can view more data in the dashboard and get a feel for how it looks with more content.  

#### Chains
This project only queries for mainnet token balances. It could easily be extended to include more chains, however to keep things simple for the scope of the project, I decided to only use mainnet token balances. 

#### Pricing Tokens
Given more time, I would use something like CoinGecko to fetch prices and then display them on the dashboard. I would then use the prices to update the total networth of the portfolio, and display this to the user. I am assuming that the Pulsar API return pricing information already, though I am not certain this is the case. 

#### Sorting
During a refactor, I opted to remove a token sorting feature, where the user could sort their tokens by price. This was removed when I switched from fetching data on the client to the server, and I did not have enough time to put it back in. If I had more time, this would be a very good UX feature for the user. 

#### UX/UI
Lots of changes could be made, such as animations, more loading states, and color changes based on state. I have included some of this, but I didn't want to take too long with this project, so I decided to keep it minimal. I did have plans to include a networth chart, but this felt like too much for the project requirements. 


## Setup 

### App
This project is deployed via Vercel and can be viewed using this link: https://fortytwo-challenge.vercel.app/

### Local

This project requires an Alchemy key. I can give you mine for testing if you do not have one. First, create a ``.env.local`` file in the root directory. Then, add a ``NEXT_PUBLIC_ALCHEMY_API`` variable to it, followed by your Alchemy API key. This would look like: 

```
NEXT_PUBLIC_ALCHEMY_API="alchemyapikeygoeshere"
```

#### Getting Started

##### Clone the repo

```
git clone https://github.com/mel0ndev/fortytwo-challenge.git
```

##### Install dependencies

In the project directory:
```
npm install 
```

##### Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
