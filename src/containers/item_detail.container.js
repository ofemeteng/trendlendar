import React, {Component} from 'react';
import { connect } from 'react-redux';

class ItemDetail extends Component {
	constructor(props) {
		super(props);
	}


	render() {

	if  (!this.props.articleItem.currentItem) {
		return <div className="col-md-4"></div>;
	}

	const LargeImageStyle = {
		"width": "300px",
		"height": "250px"
	};

	if(this.props.articleItem.version === 'article') {
		return (
		<div className="col-md-4">
			<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title">{this.props.articleItem.currentItem.headline.main}</h3>
			  </div>
			  <div className="panel-body">
			  	{(() => {
				        if (this.props.articleItem.currentItem.multimedia.length > 0) {
						return	<img className="media-object" src={ `http://www.nytimes.com/${this.props.articleItem.currentItem.multimedia[1].url}` } style={LargeImageStyle} />
					}
					return false;
				      })()}
				    <br/>
				    {this.props.articleItem.currentItem.snippet}
			  </div>
			</div>
		</div>

		);

	}

	if(this.props.articleItem.version === 'top_stories') {
		return (
		<div className="col-md-4">
			<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title">{this.props.articleItem.currentItem.title}</h3>
			  </div>
			  <div className="panel-body">
			  	{(() => {
				        if (this.props.articleItem.currentItem.multimedia.length > 0) {
						return	<img className="media-object" src={ `${this.props.articleItem.currentItem.multimedia[3].url}` } style={LargeImageStyle} />
					}
					return false;
				      })()}
				    <br/>
				    {this.props.articleItem.currentItem.abstract}
			  </div>
			</div>
		</div>

		);

	}
	
	}


	
}

function mapStateToProps(state) {
		return {
			articleItem: state.articleItem
		};
}


export default connect(mapStateToProps)(ItemDetail);