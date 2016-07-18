import { SEARCH_NEWS,  RESET_SEARCH_NEWS} from '../constants';
import update from 'react-addons-update';


export default function (state={ docs: [] }, action) {
	switch (action.type) {
		case SEARCH_NEWS:
			return {...state, docs: action.payload.data.response.docs};
		case RESET_SEARCH_NEWS:
			return update(state, {docs: {$set: []}});
	}

	return state;
}