import { useState } from "react";
import {
  Card,
  Typography,
  Modal,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  SCardActionArea,
  SCardMedia,
  SBox,
  SButton,
  SCardContent,
} from "./MainPageModalStyle";

const MainPageModal = ({ card }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card onClick={handleOpen}>
        <SCardActionArea>
          {!isMatch && (
            <SCardMedia
              component="img"
              height="120"
              image={card.svg}
              alt={card.alt}
            />
          )}
          <SCardContent>
            <Typography gutterBottom variant="h6">
              {card.title}
            </Typography>
            {!isMatch && (
              <Typography variant="body2" color="text.secondary">
                {card.text.substring(0, Math.min(card.text.length, 75)) +
                  " ..."}
              </Typography>
            )}
          </SCardContent>
        </SCardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <SBox>
            <Typography variant="h5">{card.title}</Typography>
            <Typography align="justify">{card.text}</Typography>
            <SButton onClick={handleClose}>CLOSE</SButton>
          </SBox>
        </Fade>
      </Modal>
    </>
  );
};

export default MainPageModal;
