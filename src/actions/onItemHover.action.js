import { ON_ITEM_HOVER } from '../constants';


 export function onItemHover (item, type) {
	return {
		type: ON_ITEM_HOVER,
		payload: item,
		version: type
	};
}
