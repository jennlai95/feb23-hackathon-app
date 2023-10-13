import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ApiProvider, { ApiContext } from "../Contexts/ApiContext";

export default function BookSearchByName() {

	// search results 
	const [searchResults, setSearchResults] = useState([]);

    // query param
    const {bookName} = useParams();

	// api URL 
	const {api} = useContext(ApiContext);

	// api key 
	let apiKey = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		console.log("book search component has mounted! Making a fetch request now...");
	  
		async function apiRequest() {
		  try {
			const response = await fetch(
			  `https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=10`
			);
	  
			if (!response.ok) {
			  throw new Error('Network response was not ok');
			}
	  
			const responseData = await response.json();
			const responseArray = responseData.items; 
	  
			setSearchResults(responseArray);
			
		  } catch (error) {
			console.error('Error fetching books:', error);
		  }
		}
	  
		apiRequest();
  
	  }, [bookName, apiKey]);

	return (
		<div>
		<h1> Book Search </h1>
      		{searchResults.map((result) => (
        <div key={result.id}>
          <h1>{result.volumeInfo.title} - {result.volumeInfo.authors}</h1>
		  <a href = {result.volumeInfo.previewLink}>
		  <img src = {result.volumeInfo.imageLinks.thumbnail} alt = {result.volumeInfo.title}/>
		  </a>
        </div>
      ))}
		</div>
	)
 }
