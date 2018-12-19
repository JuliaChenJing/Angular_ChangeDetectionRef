
export class DataProvider {
    data = 1;
    constructor() {
        setInterval(() => { this.data++; }, 500);
    }
}
