import { combineReducers } from 'redux';
import NewSearchReducer from './news_search.reducer';
import ItemReducer from './item.reducer';
import MenuReducer from './menu.reducer';

const  rootReducer = combineReducers({
	articleItem: ItemReducer,
	newsSearchArray: NewSearchReducer,
	menuResultsArray: MenuReducer
});

export default rootReducer;