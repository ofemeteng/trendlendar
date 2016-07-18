import React, {Component} from 'react';

String.prototype.ucfirst = function()
{
    return this.charAt(0).toUpperCase() + this.substr(1);
}

const MenuItem = ({item, onItemSelect, resetSearchNews}) => {

	return (
			<li onClick={ () => sendActions(item, onItemSelect, resetSearchNews) } className="list-group-item">
				{item.ucfirst()}
			</li>
		);
};

function sendActions(item, onItemSelect, resetSearchNews) {
		resetSearchNews();
		onItemSelect(item);
}

export default MenuItem;