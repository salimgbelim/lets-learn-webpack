export default class FlashMessage {
    constructor(message) {
        this.message = message;
    }

    renderAlert(){
        alert(`${this.message} from alert`);
    }

    renderLog(){
        console.log(`${this.message} from log`);
    }
}