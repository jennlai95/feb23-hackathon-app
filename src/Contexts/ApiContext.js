import { createContext, useState } from "react";

export const ApiContext = createContext(null);

let apiKey = process.env.REACT_APP_API_KEY;

export default function ApiProvider  ({children}) {

	const [apiUrl, setApiUrl] = useState("https://www.googleapis.com/books/v1/volumes?q=");

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