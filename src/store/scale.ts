import {defineStore} from "pinia";
import {getLocalStorageInt, getLocalStorageNumber} from "../utils/localStorageUtil";

export const scaleStore = defineStore("scale", () => {
    const current = getLocalStorageInt("scale", 0);
    return {current};
});
