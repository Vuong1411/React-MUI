import React, { ReactNode } from 'react';
import {
    Home as HomeIcon,
    Person as PersonIcon,
    Email as EmailIcon,
    Notifications as NotificationsIcon,
    Group as GroupIcon,
    Bookmark as BookmarkIcon,
    Event as EventIcon,
    Movie as MovieIcon,
    PhotoLibrary as PhotoIcon,
    Store as StoreIcon,
    Games as GamesIcon,
    Settings as SettingsIcon
} from "@mui/icons-material";

export interface Service {
    id: number;
    name: string;
    path: string;
    icon: ReactNode;
}

export const Services: Service[] = [
    { 
        id: 1, 
        name: "Trang chủ", 
        path: "/", 
        icon: <HomeIcon /> 
    },
    { 
        id: 2, 
        name: "Trang cá nhân", 
        path: "/profile", 
        icon: <PersonIcon /> 
    },
    { 
        id: 3, 
        name: "Tin nhắn", 
        path: "/messages", 
        icon: <EmailIcon /> 
    },
    { 
        id: 4, 
        name: "Thông báo", 
        path: "/notifications", 
        icon: <NotificationsIcon /> 
    },
    {
        id: 5,
        name: "Nhóm",
        path: "/groups",
        icon: <GroupIcon />
    },
    {
        id: 6,
        name: "Đã lưu",
        path: "/saved",
        icon: <BookmarkIcon />
    },
    {
        id: 7,
        name: "Sự kiện",
        path: "/events",
        icon: <EventIcon />
    },
    {
        id: 8,
        name: "Watch",
        path: "/watch",
        icon: <MovieIcon />
    },
    {
        id: 9,
        name: "Hình ảnh",
        path: "/photos",
        icon: <PhotoIcon />
    },
    {
        id: 10,
        name: "Marketplace",
        path: "/marketplace",
        icon: <StoreIcon />
    },
    {
        id: 11,
        name: "Trò chơi",
        path: "/gaming",
        icon: <GamesIcon />
    },
    {
        id: 12,
        name: "Cài đặt",
        path: "/settings",
        icon: <SettingsIcon />
    }
];