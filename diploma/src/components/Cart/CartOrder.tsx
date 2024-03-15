import { FormEvent, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../models/hook";
import { getOrder } from "../../redux/StoreSlice";
import Loader from "../Loader";
import ErrorInfo from "../ErrorInfo";

export default function CartOrder() {
  const orderSuccess = useAppSelector((state) => state.orderSuccess);
  const dispatch = useAppDispatch();
  const orderForm = useRef<HTMLFormElement>(null);
  const cartList = useAppSelector((state) => state.cart);
  const [orderData, setOrderData] = useState<{
    phone: string;
    address: string;
    rule: boolean;
  }>({ phone: "", address: "", rule: false });
  const [confirm, setConfirm] = useState<boolean>(false);
  const isLoading = useAppSelector((state) => state.loading.order);
  const isError = useAppSelector((state) => state.error.other);

  const sendOrder = (evt: FormEvent) => {
    evt.preventDefault();
    const order = {
      owner: { phone: orderData.phone, address: orderData.address },
      items: cartList,
    };
    dispatch(getOrder(order));
    orderForm.current?.reset();
  };

  const checkConfirm = () => {
    const hasSelectedItems = cartList.length > 0;
    const isFormValid =
      orderData.phone.trim() !== "" &&
      orderData.address.trim() !== "" &&
      orderData.rule;
    setConfirm(hasSelectedItems && isFormValid);
  };

  return (
    <section className="order">
      {orderSuccess && (
        <div className="order-success">
          <h2>Заказ успешно отправлен!</h2>
          <span>Спасибо, что выбрали наш магазин. Ждем Вас обратно.</span>
        </div>
      )}
      {isError && <ErrorInfo text={isError} />}
      {isLoading && !isError && <Loader />}

      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
        <form className="card-body" ref={orderForm} onSubmit={sendOrder}>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              className="form-control"
              id="phone"
              placeholder="Ваш телефон"
              required
              onChange={(evt) => {
                const text = evt.target.value;
                setOrderData((prev) => ({ ...prev, phone: text }));
                checkConfirm();
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input
              className="form-control"
              id="address"
              placeholder="Адрес доставки"
              required
              onChange={(evt) => {
                const text = evt.target.value;
                setOrderData((prev) => ({ ...prev, address: text }));
                checkConfirm();
              }}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreement"
              required
              onChange={(evt) => {
                const isChecked = evt.target.checked;
                setOrderData((prev) => ({ ...prev, rule: isChecked }));
                checkConfirm();
              }}
            />
            <label className="form-check-label" htmlFor="agreement">
              Согласен с правилами доставки
            </label>
          </div>
          <button
            type="submit"
            className={`btn btn-outline-secondary ${confirm ? "" : "disabled"}`}
            disabled={!confirm}
          >
            Оформить
          </button>
        </form>
      </div>
    </section>
  );
}
