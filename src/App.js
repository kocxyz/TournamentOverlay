import { Box, Typography } from "@mui/material";
import "./App.css";
import io from "socket.io-client";

// Components
import LinkCard from "./components/LinkCard";
import { useEffect, useState } from "react";
import BCMessage from "./components/BCMessage";

const remote = new URL(window.location.href).searchParams.get("remote");

// Socket
const socket = io(remote);

function App() {
  const [gameType, setGameType] = useState("GAME");
  const [gameNumber, setGameNumber] = useState(1);

  const [roundNumber, setRoundNumber] = useState(1);

  const [blueTeamName, setBlueTeamName] = useState("Default");
  const [blueTeamPoints, setBlueTeamPoints] = useState(0);

  const [yellowTeamName, setYellowTeamName] = useState("Default");
  const [yellowTeamPoints, setYellowTeamPoints] = useState(0);

  const [bcMessageType, setBcMessageType] = useState(false);
  const [bcMessage, setBcMessage] = useState("kocity.xyz");

  useEffect(() => {
    socket.on("updateData", (data) => {
      setGameType(data.gameType.toUpperCase());
      setGameNumber(data.gameNumber);

      setRoundNumber(data.roundNumber);

      setBlueTeamName(data.blueTeamName);
      setBlueTeamPoints(data.blueTeamPoints);

      setYellowTeamName(data.yellowTeamName);
      setYellowTeamPoints(data.yellowTeamPoints);

      setBcMessageType(data.bcMessageType);
      setBcMessage(data.bcMessage);
    });
  }, []);

  if (!socket || !remote) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1>Not Connected to remote</h1>
      </Box>
    );
  }

  return (
    <>
      <BCMessage type={bcMessageType} message={bcMessage} />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "space-between",
          paddingTop: "1rem",
        }}
      >
        <Box
          style={{
            textAlign: "left",
          }}
        >
          {/* //////////////////////////////////// */}
          {/* LEFT */}
          {/* //////////////////////////////////// */}
          <Box className="RoundHeaderLeft">
            <Typography
              fontFamily="Brda"
              fontSize="48px"
              fontWeight="bold"
              letterSpacing="0.1em"
            >
              {gameType} <strong>{gameNumber}</strong>
            </Typography>
          </Box>
          <Box className="SubRoundHeaderLeft">
            <Typography
              fontFamily="Brda"
              fontSize="38px"
              fontWeight="bold"
              letterSpacing="0.08em"
            >
              ROUND <strong>{roundNumber}</strong>
            </Typography>
          </Box>
        </Box>

        <Box
          style={{
            textAlign: "right",
          }}
        >
          {/* //////////////////////////////////// */}
          {/* RIGHT */}
          {/* //////////////////////////////////// */}

          <Box className="RoundHeaderRightBlue RightTextStraight">
            <Typography
              fontFamily="Brda"
              fontSize="38px"
              fontWeight="bold"
              letterSpacing="0.00em"
            >
              {blueTeamName}
            </Typography>
            <Typography
              fontFamily="Brda"
              fontSize="38px"
              fontWeight="bold"
              letterSpacing="0.08em"
            >
              {blueTeamPoints}
            </Typography>
          </Box>
          <Box className="RoundHeaderRightYellow RightTextStraight">
            <Typography
              fontFamily="Brda"
              fontSize="38px"
              fontWeight="bold"
              letterSpacing="0.02em"
              textAlign="center"
            >
              {yellowTeamName}
            </Typography>
            <Typography
              fontFamily="Brda"
              fontSize="38px"
              fontWeight="bold"
              letterSpacing="0.08em"
            >
              {yellowTeamPoints}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Bottom right tag */}

      <LinkCard />
    </>
  );
}

export default App;
