import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { searchNews } from '../actions/searchNews.action';
import { connect } from 'react-redux';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { text: '' }; 

	}

	render() {
		const searchStyle = { "marginTop": "70px" };
		return (
			<div  className="row">
				<div className="form-group col-md-12" style={searchStyle}>
					<form onSubmit={ (event) => this.onFormSubmit(event) } className="form" >
						<input value={this.state.text} onChange={(event) => this.onInputChange(event.target.value )} className="form-control"
							placeholder="Search news stories" />
					</form>
				</div>
			</div>
			);
	}

	onInputChange(text) {
		this.setState({text});
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.searchNews(this.state.text);
		this.setState({ text: ''})
	}

	
}

function mapDispatchToProps(dispatch) {
		return bindActionCreators({searchNews}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);