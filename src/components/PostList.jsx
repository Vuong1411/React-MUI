import {
  Avatar,
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";
import { PostItems } from "../data/posts";

export const PostList = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <Avatar
              src="/avatar.jpg"
              alt="Trần Duy Vương"
            />
            <Box
              onClick={handleClickOpen}
              sx={{
                flex: 1,
                padding: "12px 16px",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                borderRadius: "25px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                },
              }}
            >
              <Typography
                variant="body1"
                color="#808080"
                sx={{
                  fontWeight: 500,
                }}
              >
                Bạn đang nghĩ gì thế...
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{ backgroundColor: "#16181c", width: "400px" }}
          component="form"
        >
          <DialogTitle color="#f5f5f5">Create new</DialogTitle>
          <DialogContent>
            <TextField
              label="What's new?"
              name="content"
              fullWidth
              multiline
              rows={3}
              sx={{
                marginTop: "16px",
                "& .MuiInputBase-root": {
                  color: "#f5f5f5", // Text color
                },
                "& .MuiInputLabel-root": {
                  color: "#808080", // Label color
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#808080", // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#f5f5f5", // Hover border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#f5f5f5", // Focused border color
                  },
                },
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Post</Button>
          </DialogActions>
        </Box>
      </Dialog>

      {PostItems.map((post) => (
        <Post
          key={post.id}
          user={post.user}
          caption={post.caption}
          img={post.img}
          like={post.like}
          comment={post.comment}
          view={post.view}
          share={post.share}
          createdAt={post.createdAt}
        />
      ))}
    </Box>
  );
};
