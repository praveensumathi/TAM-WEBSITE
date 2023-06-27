import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const backgroundStyle = {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUAIoKCjbr6mIQeSrCv5WqfoitcQVhEzYOQw&usqp=CAU")',
    backgroundSize: 'cover',
    height: isSmallScreen ? 750 : 250,
    justifyContent: 'center',
  };

  return (
    <div>
      <div className='img' style={backgroundStyle}>
        <div>
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontWeight: 500,
              justifyContent: 'center',
              fontfamily: 'cursive',
              padding: 3,
            }}
          >
            Tam Tree
          </Typography>
        </div>
        <div>
          <Button
            variant="outlined"
            sx={{
              color: 'black',
              border: '2px solid black',
              backgroundColor: 'white',
              borderRadius: 60,
              top: isSmallScreen ? 550 : 'auto',
              left: isSmallScreen ? 150 : 'auto',
              width: isSmallScreen ? '30%' : 'auto',
            }}
          >
            more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;