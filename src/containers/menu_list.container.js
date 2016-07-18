import React, {Component} from 'react';
import MenuItem from '../components/menu_item.component';
import { onItemSelect } from '../actions/onItemSelect.action';
import { resetSearchNews } from '../actions/resetSearchNews.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MenuList extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		let Menus = ['world', 'politics', 'business', 'opinion', 'technology', 'science', 'health', 'sports', 'movies', 'fashion'];

		const Items = Menus.map((item, index) => {
		return <MenuItem  
				onItemSelect={this.props.onItemSelect} resetSearchNews={this.props.resetSearchNews}
				key={index} item={item} />;
	});

	return (
		<div className="col-md-2">
			<ul className="list-group">
				{Items}
			</ul>
		</div>
		);
	}


	
}

function mapDispatchToProps(dispatch) {
		return bindActionCreators({onItemSelect, resetSearchNews}, dispatch);
}

export default connect(null, mapDispatchToProps)(MenuList);