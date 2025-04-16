import React from "react";
import {
    Box,
    Typography,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@mui/material';
import {
    People as PeopleIcon,
    Public as PublicIcon,
    Image as ImageIcon,
    VideoLibrary as VideoIcon,
    Article as ArticleIcon,
} from '@mui/icons-material';

const Filter = ( {activeFilter, onFilterChange}) => {
    const filters = [
        { id: 'all', label: 'Tất cả', icon: <PublicIcon /> },
        { id: 'people', label: 'Mọi người', icon: <PeopleIcon /> },
        { id: 'posts', label: 'Bài viết', icon: <ArticleIcon /> },
        { id: 'photos', label: 'Hình ảnh', icon: <ImageIcon /> },
        { id: 'videos', label: 'Video', icon: <VideoIcon /> },
    ];

    return (
        <Box sx={{ backgroundColor: '#16181c', borderRadius: '25px', padding: 2 }}>
            <Typography variant="h6" sx={{ color: '#f5f5f5', marginBottom: 2 }}>
                Bộ lọc tìm kiếm
            </Typography>
            <Divider sx={{ backgroundColor: '#808080' }} />
            <List component="nav">
                {filters.map((filter) => (
                    <ListItemButton 
                    key={filter.id} 
                    selected={activeFilter === filter.id}
                    onClick={() => onFilterChange(filter.id)} 
                    sx={{ borderRadius: '25px', marginBottom: 1 }}>
                        <ListItemIcon sx={{ color: activeFilter === filter.id ? '#6ec207' : '#808080' }}>
                            {filter.icon}
                        </ListItemIcon>
                        <ListItemText 
                        primary={filter.label} 
                        sx={{ '& .MuiListItemText-primary': {
                            color: activeFilter === filter.id ? '#6ec207' : '#f5f5f5',
                            fontWeight: activeFilter === filter.id ? 600 : 400,
                        },}} />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
}

export default Filter;