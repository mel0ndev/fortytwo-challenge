import Input from "@/app/components/input/index"; 
import Dashboard from "@/app/components/dashboard/index"; 
import { RefreshButton } from "@/app/components/refresh/index"; 

//Dashboard component will be the parent of the input and refresh components and will keep track of their state
export default async function Home({
	searchParams
}: {
	searchParams?: {
		query?: string;
		page?: string;
	}
}) {
	const query = searchParams?.query || ''; 
	return (
  	    <>
  	  	  <div className="flex justify-center items-center text-3xl md:text-5xl pt-14 pb-2">
  	  		FortyTwo Dashboard
  	  	</div>
		<div className="flex justify-center text-sm text-muted-foreground">
			The answer to the universe.
		</div>
  	    <div className="flex grid grid-cols-3">
			<div className="flex col-span-3 justify-center">
				<Input />
			</div>
			<div className="flex col-span-3 justify-center md:justify-start md:pl-14 md:ml-14 pb-4 md:pb-2"> 
				<RefreshButton />
			</div>
			<div className="col-span-3">
				<Dashboard query={query}/>
			</div>
		</div>
  	  </>
  	);
}
