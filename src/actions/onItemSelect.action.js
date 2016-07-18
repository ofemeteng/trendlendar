import axios from 'axios';

import { NYT_API_KEY } from '../constants';

import { ON_ITEM_SELECT } from '../constants';

 export function onItemSelect (item) {

 	const url = `https://api.nytimes.com/svc/topstories/v2/${item}.json?api-key=${NYT_API_KEY}`;
	const request = axios.get(url);

	return {
		type: ON_ITEM_SELECT,
		payload: request
	};
}
