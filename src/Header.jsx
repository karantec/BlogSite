import { Toolbar, IconButton, Typography, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledTitle = styled(Typography)({
  flexGrow: 1,
  fontSize:20,
  textTransform: 'uppercase',
  justifyContent: 'center',
  fontFamily: 'cursive',
});

const Header = () => {
  return (
    <div>          
      <StyledToolbar>
        <IconButton color='inherit'>
          <MenuIcon/>
        </IconButton>
        <StyledTitle variant="h6">Blogging website</StyledTitle>
        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <CircleNotificationsIcon/>
          </Badge>
        </IconButton>
        <IconButton color='inherit'>
          <AccountCircleIcon/>
        </IconButton>
      </StyledToolbar>
      <Divider/>
      <StyledTitle >Expreess your emotion through words</StyledTitle>
    </div>
  );
}

export default Header;
