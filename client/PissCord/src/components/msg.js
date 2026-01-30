export default class Msg {
    constructor(author, text, self = false) {
        this.author = author;
        this.text = text;
        this.self = self;
    }
}