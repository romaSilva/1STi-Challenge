import { loadList } from "./loadList";

export const baseUrl = "http://api.openweathermap.org/data/2.5/";
const list = loadList();

export const idsList = list.map((item) => item.id);
