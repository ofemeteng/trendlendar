import axios from 'axios';

import { NYT_API_KEY } from '../constants';

import { SEARCH_NEWS } from '../constants';


 export function searchNews (text) {
 	
 	const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${NYT_API_KEY}&q=${text}`;
	const request = axios.get(url);

	return {
		type: SEARCH_NEWS,
		payload: request
	};
}
