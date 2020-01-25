export class NewsData {
    public title: string;
    public content: string;
    public imageUrl: string;

    constructor(title: string) {
        this.title = title;
    }
    // constructor(title: string, image: url) {   // tutaj mozna dodawac nastepne rzeczy jak img url
    //     this.title = title;
    // }
}