import { useEffect, useState } from "react";
import axios from "axios";

function Homepage() {
	const [data, setData] = useState([{}]);

	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get("http://localhost:3000/api");
				setData(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		getData();
	}, []);

	return (
		<div>
			<h1>{data.message}</h1>
		</div>
	);
}

export default Homepage;
