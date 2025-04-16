import React, { useState } from 'react';
import { Container, Grid2 } from "@mui/material";
import Filter from "../components/Filter";
import SearchResult from "../components/SearchResult";
import Suggestions from "../components/Suggestions";
import { Users } from "../data/users";

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");

    // Filter users based on search term
    const filteredResults = Users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle filter changes
    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <Container maxWidth="xl" sx={{ marginTop: "80px", marginBottom: "40px" }}>
        <Grid2 container spacing={2}>
            <Grid2 size={{ md: 3 }} sx={{ position: 'relative' }}>
                <Filter 
                    activeFilter={activeFilter}
                    onFilterChange={handleFilterChange}
                />
            </Grid2>
            <Grid2 size={{ md: 6 }}>
                <SearchResult 
                    results={filteredResults}
                    searchTerm={searchTerm}
                    activeFilter={activeFilter}
                    onSearchChange={(e) => setSearchTerm(e.target.value)}
                />
            </Grid2>
            <Grid2 size={{ md: 3 }} sx={{ position: 'relative' }}>
                <Suggestions />
            </Grid2>
        </Grid2>
        </Container>
    );
};
