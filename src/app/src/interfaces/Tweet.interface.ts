export interface Tweet {
    id:number;
    name: string;
    username: string;
    content: string;
    date: Date;
    likes: number;
    retweets: number;
    comments: number;
    avatar: string;
    image?: string;
}
