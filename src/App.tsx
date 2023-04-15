import React, { useState, Fragment } from "react";
import pinyin from "pinyin";
import { Stack, Box, Typography, TextField, Paper } from "@mui/material";

function App(): JSX.Element {
  const [inputChineseText, setInputChineseText] = useState<string>("");
  return (
    <>
      <Box m={2}>
        <Stack direction={{ md: "column", lg: "row" }} spacing={2}>
          <Box flexGrow={1}>
            <Typography variant="h4" component="h2" p={1}>
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
            <Typography variant="h4" component="h2" p={1}>
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
