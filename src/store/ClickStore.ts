import { makeAutoObservable, runInAction } from "mobx";

const delay: any = () => new Promise((res) => setTimeout(() => res(10), 1000));

export default class ClickStore {
  _counter: number;
  _isLoading: string;

  constructor() {
    this._counter = 0;
    this._isLoading = "no";
    makeAutoObservable(this);
  }

  get counter() {
    return this._counter;
  }

  get isLoading() {
    return this._isLoading;
  }

  inc() {
    this._counter = ++this._counter;
  }

  dec() {
    this._counter = --this._counter;
  }

  async asInc() {
    console.log("clicked");
    this._isLoading = "yes";
    const newData = await delay();

    runInAction(() => {
      this._counter = this._counter + newData;
      this._isLoading = "no";
    });
  }
}
