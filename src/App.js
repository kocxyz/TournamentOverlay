import { Box, Typography } from '@mui/material';
import './App.css';

// Components
import LinkCard from './components/LinkCard';

function App() {
  return (
    <>
    <Box style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'space-between',
      paddingTop: '1rem',
    }}>
      <Box style={{
        textAlign: 'left',
      }}>
        {/* //////////////////////////////////// */}
        {/* LEFT */}
        {/* //////////////////////////////////// */}
        <Box className="RoundHeaderLeft">
          <Typography
              fontFamily="Brda"
              fontSize="48px"
              fontWeight="bold"
              letterSpacing="0.1em"
          >GAME <strong>1</strong></Typography>
        </Box>
        <Box className="SubRoundHeaderLeft">
          <Typography
              fontFamily="Brda"
              fontSize="38px"
              fontWeight="bold"
              letterSpacing="0.08em"
          >ROUND <strong>1</strong></Typography>
        </Box>

      </Box>

      <Box style={{
        textAlign: 'right',
      }}>
        {/* //////////////////////////////////// */}
        {/* RIGHT */}
        {/* //////////////////////////////////// */}

        <Box className="RoundHeaderRightBlue RightTextStraight">
          <Typography
              fontFamily="Brda"
              fontSize="38px"
              fontWeight="bold"
              letterSpacing="0.00em"
          >Pasiloy</Typography>
          <Typography
              fontFamily="Brda"
              fontSize="38px"
              fontWeight="bold"
              letterSpacing="0.08em"
          >0</Typography>
        </Box>
        <Box className="RoundHeaderRightYellow RightTextStraight">
          <Typography
              fontFamily="Brda"
              fontSize="38px"
              fontWeight="bold"
              letterSpacing="0.02em"
              textAlign="center"
          >Chl0ekeil3r</Typography>
          <Typography
              fontFamily="Brda"
              fontSize="38px"
              fontWeight="bold"
              letterSpacing="0.08em"
          >0</Typography>
        </Box>
      </Box>

    </Box>

      {/* Bottom right tag */}

      <LinkCard />
    </>
  );
}

export default App;
