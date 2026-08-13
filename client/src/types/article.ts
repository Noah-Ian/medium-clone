export interface Article{
    id: string;

    title:string;

    content:string;

    coverImage?:string;

    createdAt:string;

    author:{
        id: string;
        name: string;
        avatar?: string;
    };
}