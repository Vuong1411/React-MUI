import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import "../styles/Suggestions.css";
import { Users } from "../data/users"; 

const Suggestions = () => {
  const [following, setFollowing] = React.useState({});

  const handleFollow = (userId) => {
    setFollowing((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  return (
    <Box
      maxWidth={"350px"}
      sx={{
        padding: "16px",
        backgroundColor: "#16181c",
        borderRadius: "25px",
        position: 'sticky',
        top: 80,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#f5f5f5",
          }}
        >
          Gợi ý cho bạn
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            color: "#6ec207",
          }}
        >
          Xem tất cả
        </Typography>
      </Box>

      <List>
        {Users.map((user) => (
          <ListItem
            key={user.id}
            sx={{
              px: 0,
              "&:hover": {
                backgroundColor: "#393939",
              },
            }}
          >
            <ListItemAvatar>
              <Avatar src={user.avatar} sx={{ width: 40, height: 40 }} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    color: "#f5f5f5",
                  }}
                >
                  {user.name}
                </Typography>
              }
              secondary={
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "0.8rem", color: "#808080" }}
                >
                  {user.username}
                </Typography>
              }
            />
            <ListItemSecondaryAction>
              <Button
                variant="contained"
                size="small"
                sx={{
                  color: following[user.id] ? "text.secondary" : "#0a0a0a",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "25px",
                }}
                onClick={() => handleFollow(user.id)}
              >
                {following[user.id] ? "Đã theo dõi" : "Theo dõi"}
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Suggestions;
