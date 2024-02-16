import { isAddress } from "web3-validator"; 
import axios, {AxiosResponse} from "axios";


export const getData = async (query?: string): Promise<Array<object> | undefined> => {
	// Alchemy URL --> Replace with your API key at the end
	let response: object[] = []
	if (query && !isAddress(query)) {
		response.push(Object({empty: ''})); 
		return response; 
	} else {
	//if (query && isAddress(query)) {
		//TODO remove in prod, might leave for testing to make it easy 
		const baseURL = NEXT_PUBLIC_ALCHEMY_API;
		// Data for making the request to query token balances
		const data = JSON.stringify({
		  jsonrpc: "2.0",
		  method: "alchemy_getTokenBalances",
		  headers: {
		    "Content-Type": "application/json",
		  },
		  params: [`${query}`],
		  id: 42,
		});
		
		// config object for making a request with axios
		const config = {
		  method: "post",
		  url: baseURL,
		  headers: {
		    "Content-Type": "application/json",
		  },
		  data: data,
		};
		
		// Make the request and print the formatted response:
		try {
			let res: AxiosResponse<any, any>  = await axios(config);
			const balances = res["data"]["result"];

			// Remove tokens with zero balance
  			const nonZeroBalances = await balances.tokenBalances.filter((token: any) => {
  			  return token.tokenBalance !== "0";
  			});
  			// Counter for SNo of final output
  			let i = 1;
  			// Loop through all tokens with non-zero balance
  			for (let token of nonZeroBalances) {
				// Get balance of token
  			  	let balance = token.tokenBalance;
  			  	// options for making a request to get the token metadata
  			  	const options = {
  			  	  method: "POST",
  			  	  url: baseURL,
  			  	  headers: {
  			  	    accept: "application/json",
  			  	    "content-type": "application/json",
  			  	  },
  			  	  data: {
  			  	    id: 1,
  			  	    jsonrpc: "2.0",
  			  	    method: "alchemy_getTokenMetadata",
  			  	    params: [token.contractAddress],
  			  	  },
  			  	};
				
				try {
					//getting the token metadata
					const metadata = await axios.request(options);

					// Compute token balance in human-readable format
					balance = balance / Math.pow(10, metadata["data"]["result"].decimals);
					balance = balance.toFixed(2);
					let t = {
						name: metadata["data"]["result"].name,
						balance: balance,
						symbol: metadata["data"]["result"].symbol,
						price: Math.random(),
						logo: metadata["data"]["result"].logo
					}
					if (t.logo != null) {
						response?.push(t); 
					}
				} catch (error) {
					console.log(`unable to fetch data for ${token.contractAddress}`); 
					console.log(error); 
				}
			}
		} catch (error) {
			response.push(Object(error)); 
		}
		
		//return undefined if address is not defined
		return response; 
	} 
}

