import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ApiProvider, { ApiContext } from "../Contexts/ApiContext";

export default function CardSearchByName() {

	// search results 
	const [searchResults, setSearchResults] = useState([]);

	// api URL 
	const {api} = useContext(ApiContext);

	// route param for the book name 
	const {bookName} = useParams();

	// api key 
	let apiKey = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		console.log("book search component has mounted! Making a fetch request now...");

		async function apiRequest(){
			let queryParams = new URLSearchParams({
				q: 'name:' + bookNameName
			})
			let response = await fetch(api + 'books?' + queryParams, {
				headers: {
					'X-Api-Key': apiKey
				}
			});
			
			console.log(response);

			let responseData = await response.json();

			setSearchResults(responseData.data);
		}

        apiRequest();

    }, []);

	return (
		<div>
			<h1> Book Search </h1>
            {searchResults.length > 0 && 
			<div>
				<h1>{searchResults[0].name} - {searchResults[0].id}</h1>

			</div>
            }
		</div>
	)
 }
