import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Services } from "../data/services";

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredServices = Services.filter(
    (service) => service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFunctionClick = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ position: 'sticky', top: 80 }}>
      <TextField
        placeholder="Tìm kiếm chức năng..."
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          mb: 2,
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#16181c",
            color: "#f5f5f5",
            borderRadius: "25px",
            "&:hover": {
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.2)",
              },
            },
            "& fieldset": { 
              borderColor: "rgba(255, 255, 255, 0.1)" 
            },
          },
          "& .MuiInputBase-input": {
            color: "#f5f5f5",
            "&::placeholder": {
              color: "rgba(255, 255, 255, 0.5)",
              opacity: 1,
            },
          },
        }}
      />

      <Box
        sx={{
          backgroundColor: "#16181c",
          borderRadius: "25px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          p: 2,
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#f5f5f5",
          }}
        >
          Chức năng hệ thống
        </Typography>
        <Divider sx={{ backgroundColor: '#808080' }} />
        <List>
          {filteredServices.map((service) => (
            <ListItem
              key={service.id}
              onClick={() => handleFunctionClick(service.path)}
              sx={{
                borderRadius: "12px",
                cursor: "pointer",
                mb: 1,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#6ec207" }}>
                {service.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ color: "#f5f5f5" }}>
                    {service.name}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>

        {filteredServices.length === 0 && (
          <Typography
            sx={{
              color: "#808080",
              textAlign: "center",
              mt: 2,
            }}
          >
            Không tìm thấy chức năng
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Sidebar;
