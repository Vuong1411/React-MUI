import { Users } from "./users";
export interface Post {
    id: number;
    user: typeof Users[0];
    caption: string;
    img: string;
    like: number;
    comment: number;
    view: number;
    share: number;
    createdAt: string;

}
export const PostItems = [
    {
        id: 1,
        user: Users[0], // John Doe
        caption: "Đây là bài viết số 1.",
        img: "https://images.unsplash.com/photo-1742268350523-70a032f3520d?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: 184,
        comment: 10,
        view: 2.2,
        share: 24,
        createdAt: "2024-04-16T10:30:00Z"
    },
    {
        id: 2,
        user: Users[1], // Jane Smith
        caption: "Đây là bài viết số 22.",
        img: "https://images.unsplash.com/photo-1742412615574-ce65e63598d8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=m3wxmja3fdb8mhxwag90by1wywdlfhx8fgvufdb8fhx8fa%3d%3d",
        like: 100,
        comment: 5,
        view: 1.2,
        share: 14,
        createdAt: "2024-04-16T09:15:00Z"
    },
    {
        id: 3,
        user: Users[2], // Mike Johnson
        caption: "Đây là bài viết số 3.",
        img: "https://images.unsplash.com/photo-1742435456486-3a0059c05e38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: 20,
        comment: 1,
        view: 1,
        share: 10,
        createdAt: "2024-04-16T08:45:00Z"
    },
    
];