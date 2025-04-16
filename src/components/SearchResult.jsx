import React, { useState } from 'react';
import {
    Box,
    TextField,
    InputAdornment,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Typography,
    Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchResult = ({ results, searchTerm, activeFilter, onSearchChange }) => {
    const [following, setFollowing] = useState({});

    const handleFollow = (userId) => {
        setFollowing((prev) => ({
            ...prev,
            [userId]: !prev[userId],
        }));
    };

    const filteredResults = results.filter(result => {
        if (activeFilter === 'all') return true;
        return result.type === activeFilter;
    });

    return (
        <Box
            maxWidth={"600px"}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    bgcolor: "#16181C",
                    borderRadius: "50px",
                    padding: "16px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: "16px", width: "100%", }}>
                        <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                        <TextField
                            fullWidth
                            placeholder="Tìm kiếm người dùng..."
                            value={searchTerm}
                            onChange={onSearchChange}
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    color: '#f5f5f5',
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: '#808080',
                                    opacity: 1,
                                },
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    backgroundColor: '#16181c',
                    borderRadius: '20px',
                    overflow: 'hidden'
                }}
            >
                {filteredResults.length > 0 ? (
                    <List sx={{ p: 0 }}>
                        {filteredResults.map((user) => (
                            <ListItem
                                key={user.id}
                                sx={{
                                    p: 2,
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    },
                                }}
                            >
                                <ListItemAvatar>
                                    <Avatar src={user.avatar} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography sx={{ color: '#f5f5f5' }}>
                                            {user.name}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography sx={{ color: '#808080' }}>
                                            {user.username}
                                        </Typography>
                                    }
                                />
                                <Button
                                    variant={following[user.id] ? "outlined" : "contained"}
                                    size="small"
                                    onClick={() => handleFollow(user.id)}
                                    sx={{
                                        borderRadius: '20px',
                                        textTransform: 'none',
                                        minWidth: '100px',
                                        backgroundColor: following[user.id] ? 'transparent' : '#6ec207',
                                        color: following[user.id] ? '#f5f5f5' : '#fff',
                                        borderColor: following[user.id] ? '#f5f5f5' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: following[user.id] ? 'rgba(255, 255, 255, 0.1)' : '#5ba006',
                                            borderColor: following[user.id] ? '#f5f5f5' : 'transparent',
                                        },
                                    }}
                                >
                                    {following[user.id] ? 'Đã theo dõi' : 'Theo dõi'}
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Typography
                        sx={{
                            color: '#808080',
                            textAlign: 'center',
                            py: 4,
                        }}
                    >
                        Không tìm thấy kết quả
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default SearchResult;