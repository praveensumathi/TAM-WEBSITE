import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const Home = () => {
  const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const backgroundStyle = {
    backgroundImage:
      'url("https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=600")',
    backgroundSize: "cover",
    height: isSmallScreen ? 350 : 550,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    backgroundBlendMode: "darken",
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <div className="img" style={backgroundStyle}>
        <Container className='animation'
          sx={{
            color: "white",
            padding: "50px",
            top:isSmallScreen?"auto":500,
          }}
        >
          <Typography variant="h4"  className='text'>
            Transforming Ideas into Digital Masterpieces
          </Typography>
          <Typography variant='h6' sx={{padding:"10px"}}>
            Unleash Your Online Potential with our Exceptional Web Development
            Services
          </Typography>
        </Container>
        <div>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: 60,
              textTransform: "none",
              display: "flex",
              justifyContent: "center",
              alignContent:"center",
              // top: isSmallScreen ? 45 : 270,
              // left: isSmallScreen ? 150 : 550,
              // width: isSmallScreen ? "30%" : "auto",
            }}
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;