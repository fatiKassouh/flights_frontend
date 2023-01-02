import React from "react";
import "./Result.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import LocalAirportRoundedIcon from "@mui/icons-material/LocalAirportRounded";
import SearchIcon from "@mui/icons-material/Search";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Button, CardActions } from "@mui/material";

function Result() {
  const theme = useTheme();
  return (
    <div>
      <Card fullWidth sl={{ alignItems: "space-betwenn" ,position: 'relative'  }}>
        <Box sl={{ display: "flex", flexDirection: "column" }}>
          <CardContent sl={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6" style={{ display: 'inline-block',marginLeft:"60px" }}>
              Your Search
              <SearchIcon style={{ display: 'inline-block'}} />
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="h6"
              style={{ marginLeft:"60px" }}
            >
              Le 11/01/2022
              <br />
              <h5 style={{ display: "inline", fontWeight: "bold" }}>
                Casablanca, Mohamed 5 (MCN){" "}
              </h5>
              <FlightTakeoffIcon
                style={{ display: "inline", color: "lightGray" }}
              />
              <h5 style={{ display: "inline", fontWeight: "bold" }}>
                {" "}
                Frankfurt, Frankfurt line (FKL)
              </h5>
            </Typography>
            <CardActions>
              <Button style={{ 
                    position: 'absolute', top: '140px', right: '10px', marginRight:"60px",fontFamily: 'Times New Roman, sans-serif',
                    color: "black",
                    background: "linear-gradient(to right, #0ED2F7, #B2FEFA)",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    fontSize: "18px",
                    cursor: "pointer",
                    textTransform:"lowercase",
                    transition: "background 0.3s",
                    "&:hover": {
                    background: "linear-gradient(to right, #4568DC, #F0F2F0)",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"}, }} 
                    >
                modifier
              </Button>
            </CardActions>
          </CardContent>
        </Box>
      </Card>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "rgb(11, 197, 234, 0.347)",
        }}
      >
        <p
          style={{
            width: "100%",
            margin: "5 auto",
            textAlign: "center",
            padding: "10px",
            color: "rgb(11, 197, 234);",
            fontStyle: "italic",
          }}
        >
          This is your flight from Med 6 Airport to Frankfurt at 19:25
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            textAlign: "center",
          }}
        >
          <div>
            From
            <br />
            <div style={{ paddingTop: "3px" }}>
              <h3>19:24</h3>
              <h3>04/01/2022</h3>
            </div>
            <br />
            <h3>Frankfurt</h3>
            <h6>Frankfurt-FRA</h6>
          </div>
          <div
            style={{
              height: "150px",
            }}
          >
            <LocalAirportRoundedIcon
              style={{ fontSize: "80px", transform: "rotate(90deg)" }}
            />
            <h6
              style={{
                paddingTop: "13px",
                fontSize: "small",
                fontWeight: "100",
              }}
            >
              flight duration : 2h45min <br></br>Travel Category: Economy
            </h6>

            <div
              style={{
                position: "relative",
                top: "17px",
                right: "0",
                zIndex: 1,
                backgroundColor: "rgb(11, 197, 234)",
                color: "black",
                padding: "px 8px",
                fontWeight: "bold",
                fontSize: "25px",
                borderRadius: "50px",
              }}
            >
              <span style={{ fontSize: "25px", fontWeight: "100" }}>$ </span>
              199.99
            </div>
          </div>
          <div>
            To
            <br />
            <div style={{ paddingTop: "3px" }}>
              <h3>19:24</h3>
              <h3>04/01/2022</h3>
            </div>
            <br />
            <h3>Frankfurt</h3>
            <h6>Frankfurt-FRA</h6>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
