import { ON_ITEM_HOVER, ON_ITEM_OUT } from '../constants';
import update from 'react-addons-update';

export default function (state={currentItem: null, version: null}, action) {
	switch (action.type) {
		case ON_ITEM_HOVER:
			return {...state, currentItem: action.payload, version: action.version};
		case ON_ITEM_OUT:
			return update(state, {currentItem: {$set: null}, version: {$set: null}});
	}

	return state;
}