/* eslint-disable no-use-before-define */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../utils/api';

const api = new Api();
export const getCards = createAsyncThunk('cards/getCards', async (loadNextPage, { dispatch }) => {
  if (loadNextPage) {
    try {
      dispatch(nextPageLoaderToggler(false));
      const result = await api.getCards(loadNextPage);
      console.log(result);
      dispatch(cardsSetAdditional(result.results));
      dispatch(cardsCountSet(result.count));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(nextPageLoaderToggler(true));
    }
  } else {
    try {
      dispatch(cardsLoaderToggler(false));
      const result = await api.getCards(loadNextPage);
      console.log(result);
      dispatch(cardsCountSet(result.count));
      dispatch(cardsSet(result.results));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(cardsLoaderToggler(true));
    }
  }
});

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    cardsCount: null,
    loader: {
      cardsLoader: null,
      nextPageLoader: null,
    },
  },
  reducers: {
    cardsSet(state, action) {
      console.log(action.payload);
      return {
        ...state,
        cards: action.payload,
      };
    },
    cardsCountSet(state, action) {
      console.log(action.payload);
      return {
        ...state,
        cardsCount: action.payload,
      };
    },
    cardsSetAdditional(state, action) {
      state.cards.push(...action.payload);
    },
    cardsLoaderToggler(state, action) {
      return {
        ...state,
        loader: {
          ...state.loader,
          cardsLoader: action.payload,
        },
      };
    },
    nextPageLoaderToggler(state, action) {
      return {
        ...state,
        loader: {
          ...state.loader,
          nextPageLoader: action.payload,
        },
      };
    },
  },
});

export const {
  cardsSet, cardsCountSet, cardsDelete, cardsSetAdditional, cardsSetQuery, cardsLoaderToggler, nextPageLoaderToggler,
} = cardsSlice.actions;
export default cardsSlice.reducer;
