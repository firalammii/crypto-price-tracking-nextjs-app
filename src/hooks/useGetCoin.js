// import useData from './useData';

import { options, url, useData } from "@/app/context/DataContext";
import axios from "axios";

const useGetCoin = () => {
	const {setData, setLoading, setError, currency } = useData();

	async function getCoins (id) {
		setLoading(true);
		setError('');
		console.log("id: ", id)

		try {
			const { data } = await axios.get(`${url}?vs_currency=${currency}`, options);
			setError(''); //&per_page=20
			setLoading(false);
			setData(data);
			console.log(data);
		} catch (error) {
			console.log(error);
			setError(error.message);
			setLoading(false);
		}
	}
	return getCoins;
}

export default useGetCoin