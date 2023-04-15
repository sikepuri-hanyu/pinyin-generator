import React, { useState, Fragment } from "react";
import pinyin from "pinyin";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Box,
  TextField,
  Paper,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function App(): JSX.Element {
  const [inputChineseText, setInputChineseText] = useState<string>("");
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h4" component="div" flexGrow={1}>
            Pinyin Generator
          </Typography>
          <IconButton
            color="inherit"
            href="https://github.com/sikepuri-hanyu/pinyin-generator/"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box m={2}>
        <Stack direction={{ md: "column", lg: "row" }} spacing={2}>
          <Box flexGrow={1}>
            <Typography variant="h4" component="h1" p={1}>
              Chinese
            </Typography>
            <TextField
              placeholder="Enter Chinese text here."
              multiline
              minRows={5}
              fullWidth
              lang="zh-cmn-Hans"
              value={inputChineseText}
              onChange={(e) => {
                setInputChineseText(e.target.value);
              }}
            />
          </Box>
          <Box flexGrow={1}>
            <Typography variant="h4" component="h1" p={1}>
              Pinyin
            </Typography>
            <Paper style={{ minHeight: "10rem", padding: 10, paddingTop: 20 }}>
              {Array.from(inputChineseText).map((chineseChar, i) => (
                <Fragment key={i}>
                  <ruby
                    style={{ margin: "0.3rem", fontSize: "2rem" }}
                    lang="zh-cmn-Hans"
                  >
                    {chineseChar} <rp>(</rp>
                    <rt>
                      {pinyin(chineseChar, {
                        heteronym: true,
                        style: pinyin.STYLE_TONE,
                      }).join("")}
                    </rt>
                    <rp>)</rp>
                  </ruby>
                </Fragment>
              ))}
            </Paper>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default App;
