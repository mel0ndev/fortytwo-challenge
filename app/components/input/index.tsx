"use client"
import { useState } from "react"; 
import { isAddress } from "web3-validator"; 
import {Input as NextInput} from "@nextui-org/react";
import { useSearchParams, useRouter, usePathname } from "next/navigation"; 

const Input = () => {
	//control the state of the input
	//by default we want this to be false, and only change if interacted with
	//we also change the color based on the state
	const [isAnAddress, setIsAddress] = useState(false); 
	const [color, setColor] = useState("default"); 
	
	//setting the URL to the search params to keep track of state in parent server components 
	const searchParams = useSearchParams(); 
	const pathname = usePathname(); 
	const { replace } = useRouter(); 


	const handleSearch = (term: string) => {
		const params = new URLSearchParams(searchParams); 
		if (term) {
			params.set('query', term); 
		} else {
			params.delete('query'); 
		}
		replace(`${pathname}?${params.toString()}`); 
		if (!isAddress(term)) {
			setIsAddress(false); 
			setColor("danger")
		} else {
			setIsAddress(true); 
			setColor("success"); 
		}
	}
	
	return (
		<div className="flex justify-center w-full mt-14 pt-14 pb-4">
				<NextInput 
					type="text"
					variant="bordered"
					placeholder="Search"
					size="md"
					color={color as any}
					onChange={(e) => {
						handleSearch(e.target.value)
					}}
					defaultValue={searchParams.get('query')?.toString()}
					classNames={{
						base: "w-11/12 md:w-2/6",
						input: "text-white"
					}}
				/>
		</div>
	); 
}

export default Input; 
