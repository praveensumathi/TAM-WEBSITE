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
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignContent: "center",
            padding: "10px",
            paddingTop:"50px"
          }}
        >
          <Typography variant="h4">
            Transforming Ideas into Digital Masterpieces
          </Typography>
          <Typography variant='h6' sx={{padding:"10px"}}>
            Unleash Your Online Potential with our Exceptional Web Development
            Services
          </Typography>
        </div>
        <div>
          <Button
            variant="outlined"
            sx={{
              color: "black",
              border: "2px solid black",
              backgroundColor: "white",
              borderRadius: 60,
              // justifyContent: "center",
              // display:"flex"
              textTransform: "none",
              top: isSmallScreen ? 50 : "auto",
              left: isSmallScreen ? 150 : "auto",
              width: isSmallScreen ? "30%" : "auto",
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