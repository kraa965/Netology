import { createBrowserHistory } from "history";
import { delay, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getOrderLoading,
  getOrderSuccess,
  clearOrderSuccess,
  getItemLoading,
  getDetailLoading,
  getTopSaleLoading,
  getCategoriesLoading,
  getMoreItemLoading,
  getTopSales,
  getCategories,
  getItem,
  getMoreItems,
  getItemDetail,
  getTopSalesSuccess,
  getTopSalesFailed,
  setCategory,
  getOrder,
  getCategoriesSuccess,
  getCategoriesFailed,
  getCategoryItemsSuccess,
  getItemFailed,
  addMoreItems,
  getMoreItemsFailed,
  setPostEnd,
  getItemDetailSuccess,
} from "./StoreSlice";
import { DataItem, ItemDetail, OrderModel } from "../models/models";
import {
  getCategoriesApi,
  getItemCategoryApi,
  getItemDetailApi,
  getOrderApi,
  getTopSalesApi,
} from "../utils/api";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";

export const browserHistory = createBrowserHistory();

export function* getOrderSaga(action: PayloadAction<OrderModel>) {
  yield put(getOrderLoading());

  try {
    const response: AxiosResponse = yield getOrderApi(action.payload);
    console.log(response);

    if (response.status >= 200 && response.status < 300) {
      yield put(getOrderSuccess());
      yield delay(10000);
      yield put(clearOrderSuccess());
    }
  } catch (error) {
    yield put(
      getItemFailed({ message: (error as Error).message, errFunc: action }),
    );
  }
}

export function* getItemDetailSaga(action: PayloadAction<string | number>) {
  yield put(getDetailLoading());

  try {
    const payload: ItemDetail = yield getItemDetailApi(action.payload);

    yield put(getItemDetailSuccess(payload));
  } catch (e) {
    const error = e as AxiosError;

    if (error.response?.status === 404) {
      browserHistory.push("/*");
    }
    yield put(
      getItemFailed({ message: (e as Error).message, errFunc: action }),
    );
  }
}

export function* getSearchSaga(action: PayloadAction<string>) {
  yield put(getItemLoading());
  const categoryId: number = yield select((state) => state.activeCategoryId);

  try {
    const payload: DataItem[] = yield getItemCategoryApi(
      categoryId,
      0,
      action.payload,
    );

    yield put(getCategoryItemsSuccess(payload));
  } catch (error) {
    yield put(
      getItemFailed({ message: (error as Error).message, errFunc: action }),
    );
  }
}

export function* getMoreItemsSaga(action: PayloadAction<string>) {
  yield put(getMoreItemLoading());
  const itemsList: DataItem[] = yield select((state) => state.categoryItems);
  const searchText: string = yield select((state) => state.searchText);

  try {
    const payload: DataItem[] = yield getItemCategoryApi(
      action.payload,
      itemsList.length,
      searchText,
    );
    if (payload.length < 6) yield put(setPostEnd());

    yield put(addMoreItems(payload));
  } catch (error) {
    yield put(
      getMoreItemsFailed({
        message: (error as Error).message,
        errFunc: action,
      }),
    );
  }
}

export function* getItemsSaga(action: PayloadAction<string>) {
  yield put(getItemLoading());
  const searchText: string = yield select((state) => state.searchText);

  try {
    const payload: DataItem[] = yield getItemCategoryApi(
      action.payload,
      0,
      searchText,
    );
    yield put(getCategoryItemsSuccess(payload));
  } catch (error) {
    yield put(
      getItemFailed({ message: (error as Error).message, errFunc: action }),
    );
  }
}

export function* getCategorySaga(action: PayloadAction<string>) {
  yield put(getCategoriesLoading());

  try {
    const payload: DataItem[] = yield getCategoriesApi();
    yield put(getCategoriesSuccess(payload));
  } catch (error) {
    yield put(
      getCategoriesFailed({
        message: (error as Error).message,
        errFunc: action,
      }),
    );
  }
}

export function* getTopSaleSaga(action: PayloadAction<string>) {
  yield put(getTopSaleLoading());
  try {
    const payload: DataItem[] = yield getTopSalesApi();
    yield put(getTopSalesSuccess(payload));
  } catch (error) {
    yield put(
      getTopSalesFailed({ message: (error as Error).message, errFunc: action }),
    );
  }
}

export function* rootSaga() {
  yield takeEvery(getTopSales.type, getTopSaleSaga);
  yield takeEvery(getCategories.type, getCategorySaga);
  yield takeEvery(getItem.type, getItemsSaga);
  yield takeEvery(getMoreItems.type, getMoreItemsSaga);
  yield takeEvery(setCategory.type, getItemsSaga);
  yield takeLatest(getItemDetail.type, getItemDetailSaga);
  yield takeLatest(getOrder.type, getOrderSaga);
}
