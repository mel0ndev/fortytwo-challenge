"use client"
import { useState } from "react"; 
import { Button, Tooltip } from "@nextui-org/react";
import { useRouter } from "next/navigation"; 
import { MdOutlineRefresh } from "react-icons/md";

export const RefreshButton = () => {
	const router = useRouter(); 

	const handleClick = () => {
		router.refresh(); 
	}

	return (
		<Tooltip content="Refresh data">
			<Button
				onClick={() => {handleClick()}}
				variant="ghost"
				size="sm"
				className="p-2"
			> 
				<MdOutlineRefresh className="text-2xl md:text-3xl"/>
			</Button> 
		</Tooltip>
	); 
}

