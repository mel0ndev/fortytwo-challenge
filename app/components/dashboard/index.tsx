import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import { DashboardCard } from "./dashboard-card"; 
import { getData } from "@/app/utils/api"; 
import { DashboardConditional } from "./dashboard-conditional"; 

//parent for dashboard content
//uses the query param to search for the desired address. This is passed in via the page
const Dashboard = async ({query}: {query?: string}) => {
	//there's a chance the query fails, so if it does, we want to capture the error value and display something to the user
	//below, we check if the data returned contains an error response, if it does, we display an error message to the user, otherwise, we display the data
	//this check is done via the DashboardConditional component
	let data: Object[] | undefined;  
	if (query) {
		data = await getData(query);  
	}
	

	return (
		<div className="flex justify-center col-span-3 mr-2 ml-2 md:mr-14 md:ml-14 md:pr-14 md:pl-14 md:pb-14 pb-6">
			<Card className="flex outline outline-zinc-400 outline-[2px] w-full h-full">
				<CardBody
					className="bg-zinc-700 text-white"
				>
					<DashboardConditional data={data}/>
				</CardBody>
			</Card>
		</div>
	); 
}

export default Dashboard; 
