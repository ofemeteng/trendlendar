import React from 'react';
import NavHeader from '../components/nav-header.component';
import SearchBar from './search_bar.container';
import MenuList from './menu_list.container';
import NewsList from './news_list.container';
import ItemDetail from './item_detail.container';


const App = () => {
		return (
			<div>
				<NavHeader />
				<SearchBar />
				<div  className="row">
					<MenuList />
					<NewsList />
					<ItemDetail />
				</div>
			</div>
			);
};

export default App;