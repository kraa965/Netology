export const Listing = ({ dataCustoms }) => {
  return (
    <div className="item-list">
      {dataCustoms.map((dataCustom, index) => (
        <div className="item" key={index}>
          <div className="item-image">
            <a href={dataCustom.url}>
              <img src={dataCustom?.MainImage?.url_570xN} alt={dataCustom.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{`${dataCustom.title}`.substring(0, 50) + '...'}</p>
            <p className="item-price">
              {dataCustom.currency_code === 'EUR'
                ? `€${dataCustom.price}`
                : dataCustom.currency_code === 'USD'
                  ? `$${dataCustom.price}`
                  : `${dataCustom.currency_code} ${dataCustom.price}`}
            </p>
            <p
              className={`item-quantity ${dataCustom.quantity <= 10 ? 'level-low' : dataCustom.quantity <= 20 ? 'level-medium' : 'level-high'}`}>
              {dataCustom.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
