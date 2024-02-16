import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { useState, useEffect } from "react"; 

export const DashboardCard = ({tokens}: {tokens?: any}) => {

	return (
		<div>
			{tokens && tokens.map((t: any, index: number) => (
			<>
				<Card key={index} className="outline outline-white outline-1 md:mr-14 md:ml-14 mt-5 mb-5"> 
				<CardBody className="grid grid-cols-2 bg-zinc-600 text-white"> 
					<div className="inline-block justify-start md:justify-end">
						<p> chain </p>
						<p className="hidden md:flex"> {t.Currency.Name} </p>
						<p className=" md:hidden"> {t.balance} </p>
					</div>
					<div className="md:grid md:grid-cols-2 md:flex md:items-center">
						<p className="hidden md:flex md:justify-center"> {t.balance} </p>
						<p className="flex justify-end"> {t.price} </p>
					</div>
				</CardBody>
			</Card>
			</>
		))}
		</div>

	); 
}; 

