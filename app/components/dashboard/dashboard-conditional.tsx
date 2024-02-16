import { IoWarningOutline } from "react-icons/io5";
import DashboardContent from "./dashboard-content"; 

export const DashboardConditional = ({data}: {data: Object[] | undefined}) => {
	const renderDashboardContent = () => {
		switch (typeof data) {
			case typeof undefined:
				return (
					<div className="flex justify-center"> Try putting in an Ethereum address! </div> 	
				); 
			break; 
			case typeof Object(): 
				if (data) {
					if (data.length == 0) {
						return <div> Address has no tokens! </div>
					} else if (data.length > 0 && data[0].hasOwnProperty('name')) {
						return <DashboardContent tokens={data} />	
					} else if (data[0].hasOwnProperty('empty')) {
						return <div className="flex justify-center"> Enter a valid address, please </div> 
					} else {
						return (
							<div className="flex justify-center text-amber-500"> 
								<IoWarningOutline />
								<p> There was an error fetching the data :( </p> 
							</div>
						)
					}
				}
			}
		}

	return (
		<div> 
			{renderDashboardContent()}
		</div> 
	)

}
