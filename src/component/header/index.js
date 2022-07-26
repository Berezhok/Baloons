import React, { useEffect } from 'react';
import "./style.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { stepConnectorClasses, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';

export const Header = ({basket,favorite,list,cost,setCost}) => {

  list.map((el)=>{
    if(basket.includes(el._id)){
      cost += el.price;
      }});

  useEffect(()=>{
    setCost(cost);
  },[]);
  
  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

  return (
    <div>
    <Box className='header__all' sx={{ flexGrow: 1 }}>
    <Grid  container spacing={1} >
      <Grid  item xs={12} style={{textAlign:"end",borderBottom:"1px solid"}}>
        <Typography style={{fontWeight:"bold"}}>
            Вход/Регистрация </Typography>
      </Grid>
      <Grid  item xs={4} style={{borderBottom:"1px solid"}}>
        <Typography>Контакты</Typography><br/>
        <Typography>Телефон</Typography><br/>
        <Typography>Обратная связь</Typography>
      </Grid>
      <Grid style={{display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    borderBottom:"1px solid"
                    }} item xs={6}>
        <Typography style={{fontSize:"40px"}}>MegaBalls</Typography>
      </Grid>
      <Grid style={{display:"flex",
                    justifyContent:"space-evenly",
                    alignItems:"center",
                    borderBottom:"1px solid"
                    }}   item xs={2}>
        {(basket.length > 0) ?
      
        (<Badge badgeContent={basket.length} color="primary">
              <ShoppingBasketIcon color="black" />
          </Badge>)
          :
          (<Badge badgeContent={"0"} color="primary">
              <ShoppingBasketIcon color="black" />
          </Badge>)
        }

        <Typography>Стоимость  {cost} </Typography>
      </Grid>
      
        <Grid  item xs={12} style={{display:"flex",
                                    justifyContent:"end",
                                    borderBottom:"1px solid", 
                                    padding:"2px"}}>
          <Search style={{border:"1px solid"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Поиск…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Grid>
        
        
      </Grid>
    </Box>
    </div>
    );
};
