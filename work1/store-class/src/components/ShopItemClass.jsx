import {Component} from 'react';
import PropTypes from 'prop-types'


class ShopItemClass extends Component {
	render() {
		const { brand, title, description, descriptionFull, price, currency } = this.props.item;
		return (
			<div className="main-content">
				<h2>{brand}</h2>
				<h1>{title}</h1>
				<h3>{description}</h3>
				<div className="description">
					{descriptionFull}
				</div>
				<div className="divider"></div>
				<div className="purchase-info">
					<div className="price">{currency}{price.toFixed(2)}</div>
					<button>Добавить в корзину</button>
				</div>
			</div>
		);
	}
}

ShopItemClass.propTypes = {
	item: PropTypes.object.isRequired,
}

export default ShopItemClass;