export class NewsData {
    public title: string;
    public content: string;
    public imageUrl: string;
    public counter: number;

    constructor(title: string, content: string, imageUrl: string, counter: number) {
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
        this.counter = counter;
    }
    // constructor(title: string, image: url) {   // tutaj mozna dodawac nastepne rzeczy jak img url
    //     this.title = title;
    // }
}