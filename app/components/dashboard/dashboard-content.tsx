import { DashboardCard } from "./dashboard-card"; 
import { Button, Image } from "@nextui-org/react"; 
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { useState, useEffect, Suspense } from "react"; 
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";


//wrapper for the dashboard card components
//responsible for fetching the data and passing it to child components
const DashboardContent = async ({tokens}: {tokens?: Array<object>}) => {

	return (
		<div> 
			{tokens && tokens.map((t: any, index: number) => (
			<>
				<Card key={index} className="outline outline-white outline-1 md:mr-14 md:ml-14 mt-5 mb-5 hover:bg-zinc-300"> 
					<CardBody key={t.name} className="grid grid-cols-2 bg-zinc-600 hover:bg-zinc-500 text-white md:items-center"> 
						<div>
							<Image 
								src={t.logo}
								alt={t.symbol}
								width={16}
								height={16}
								className="float-left pt-1 mr-2"
							/>
						<p className="hidden md:flex md:items-center justify-start"> {t.name} </p>
						<p className=" md:hidden"> {t.symbol} </p>
					</div>
					<div className="md:grid md:grid-cols-2 md:items-center">
						<div className="md:inline-block">
							<p className="hidden md:flex md:justify-start"> {t.balance} </p>
							<p className="hidden md:flex md:text-muted-foreground md:hover:text-white"> {t.symbol} </p>
						</div>
						<p className="flex justify-end"> ${(t.price * t.balance).toFixed(2)} </p>
					</div>
				</CardBody>
			</Card>
			</>
			))}
		</div>
	);
}

export default DashboardContent; 
