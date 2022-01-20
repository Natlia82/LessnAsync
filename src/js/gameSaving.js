export default class GameSaving {

    static convertor(data) {
        const json = String(data);
        const obj = JSON.parse(json);
        return obj;

    }
}