import { action, makeAutoObservable, observable } from 'mobx';

export type JsonItemVal = string | number | boolean | unknown;
export type JsonItem = Record<string, JsonItemVal>;

class Store {
  json: JsonItem[] = [];

  constructor() {
    makeAutoObservable(this, {
      json: observable,
      setJSON: action,
      updateItem: action,
    });
  }

  setJSON(json: JsonItem[]) {
    this.json = Array.isArray(json) ? json : [json];
  }

  updateItem(index: number, name: string, value: JsonItemVal) {
    const newJson = JSON.parse(JSON.stringify(this.json));
    const item = newJson[index];

    console.log(index, name, value);
    console.log(item);

    item[name] = value;
    newJson[index] = item;

    console.log(newJson);

    this.json = newJson;
  }
}

export const store = new Store();
