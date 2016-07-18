import React, {Component} from 'react';
import NewsItem from '../components/news_item.component';
import { onItemSelect } from '../actions/onItemSelect.action';
import { onItemHover } from '../actions/onItemHover.action';
import { onItemOut } from '../actions/onItemOut.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class NewsList extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.props.onItemSelect('world');
	}

	renderList() {
		if(this.props.searchListItems.docs.length > 0) {

			const Items = this.props.searchListItems.docs.map((item) => {
			return <NewsItem  
					onItemHover={this.props.onItemHover}
					onItemOut={this.props.onItemOut}
					key={item._id} item={item}  type="article" />;
				});

			return Items;
			}

		else if (this.props.menuListItems.results.length > 0) {
			const Items = this.props.menuListItems.results.map((item, index) => {
			return <NewsItem  
					onItemHover={this.props.onItemHover}
					onItemOut={this.props.onItemOut}
					key={index} item={item}  type="top_stories" />;
				});

			return Items;
			}

		else {
			return <li className="list-group-item">Loading...</li>;
		}
	}

	render() {
		

	return (
		<div className="col-md-6">
			<ul className="list-group">
				{ (() => this.renderList())() }
			</ul>
		</div>
		);
	}


	
}

function mapStateToProps(state) {
		return {
			searchListItems: state.newsSearchArray,
			menuListItems: state.menuResultsArray
		};
}

function mapDispatchToProps(dispatch) {
		return bindActionCreators({onItemHover, onItemSelect, onItemOut}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);