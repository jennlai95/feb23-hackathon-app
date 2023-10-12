import { createContext, useState } from "react";

export const ApiContext = createContext(null);

export default function ApiProvider  ({children}){

	const [apiUrl, setApiUrl] = useState("https://www.googleapis.com/books/v1");


	return (
		<ApiContext.Provider value={
			{
				api: apiUrl, 
				setApi: setApiUrl
			}
		}>

			{children}

		</ApiContext.Provider>
	)

}