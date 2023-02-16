import { baseUrl } from './constants';

export default class Api {
  constructor() {
    this._baseUrl = baseUrl;
    this._page = 1;
  }

  _handleResponse(res) {
    if (res.ok) { return res.json(); }
    throw new Error('Error occurred');
  }

  getCards(loadNextPage) {
    const newPageNum = loadNextPage ? this._page + 1 : 1;
    return fetch(`${this._baseUrl}?page=${newPageNum}`)
      .then((res) => this._handleResponse(res))
      .catch((err) => console.log(err));
  }
}
