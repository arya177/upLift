import React from 'react'
import { InputBase, IconButton, Paper } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchBar = () => {
    return (
        <>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 'inherit', borderTop: 'solid 1px #E0EBEF' }}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search for job"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton type="submit" sx={{ p: '10px', borderRadius: '4px', backgroundColor: '#4343a4' }} aria-label="search">
                    <SearchIcon sx={{color: 'white'}}/>
                </IconButton>
            </Paper>
        </>
    )
}
export default SearchBar;