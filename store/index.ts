import { action, makeAutoObservable, observable } from 'mobx';

export type JsonItemVal = string | number | boolean | unknown;
export type JsonItem = Record<string, JsonItemVal>;

class Store {
  json: JsonItem[] = [];

  constructor() {
    makeAutoObservable(this, {
      json: observable,
      setJSON: action,
    });
  }

  setJSON(json: JsonItem[]) {
    this.json = Array.isArray(json) ? json : [json];
  }
}

export const store = new Store();
