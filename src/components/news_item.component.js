import React, {Component} from 'react';

const NewsItem = ({item, onItemHover, onItemOut, type}) => {

	return displayItem(item, onItemHover, onItemOut, type);
};

const ListItemImageStyle = {
		"width": "110px",
		"height": "90px"
};

const LinkStyle = {
	"color": "#006621",
	"margin-bottom": "2px",
	"fontStyle": "normal"
}

function displayItem(item, onItemHover, onItemOut, type) {
	if(type === 'article') {
		return (
			<li onMouseOver={ () => onItemHover(item, type) }
			 onMouseOut={ () => onItemOut() }
			 className="list-group-item">
				<div className="media">
					<div className="media-left">
						{(() => {
						        if (item.multimedia.length > 0) {
								return	<img className="media-object" src={ `http://www.nytimes.com/${item.multimedia[0].url}` }  style={ListItemImageStyle} />
							}
							return false;
						      })()}
					</div>
					<div className="media-body">
						<div className="media-heading">
							<a href={item.web_url} >{item.headline.main}</a>
							<p style={LinkStyle}>{item.web_url}</p>
							{item.snippet}
						</div>
					</div>
				</div>
			</li>
		);
	}

	if(type === 'top_stories') {
		return (
			<li onMouseOver={ () => onItemHover(item, type) }
			 onMouseOut={ () => onItemOut() }
			 className="list-group-item">
				<div className="media">
					<div className="media-left">
						{(() => {
						        if (item.multimedia.length > 0) {
								return	<img className="media-object" src={ `${item.multimedia[2].url}` }  
								style={ListItemImageStyle} />
							}
							return false;
						      })()}
					</div>
					<div className="media-body">
						<div className="media-heading">
							<a href={item.url} >{item.title}</a>
							<p style={LinkStyle}>{item.url}</p>
							{item.abstract}
						</div>
					</div>
				</div>
			</li>
		);
	}

}

export default NewsItem;