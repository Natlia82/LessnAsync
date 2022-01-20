//import { reject, resolve } from "core-js/fn/promise";
import read from './reader';
import json from './parser';
//import { reject, resolve } from 'core-js/fn/promise';

export default class GameSavingLoader {
    static load() {
        /*  (async() => {

              return new Promise((resolve, reject) => {
                  const data = await read();
                  const value = await json(data);
                  resolve(value);
              });

          })();
          */
        (async() => {
            const data = await read();
            const value = await json(data);
            return value;


        })();

    }


}