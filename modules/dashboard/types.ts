export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface Project{
    id: string;
    title: string;
    description: string;
    template: string;
    userId: string;
    user: User;
    starmark : {isMarked: boolean};
    createdAt: Date;
    updatedAt: Date;
}