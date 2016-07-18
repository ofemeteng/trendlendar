import { ON_ITEM_SELECT } from '../constants';

export default function (state={ results: [] }, action) {
	switch (action.type) {
		case ON_ITEM_SELECT:
			return {...state, results: action.payload.data.results};
	}

	return state;
}