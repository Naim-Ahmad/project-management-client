import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Tooltip, Typography } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function CustomizedProgressBars({ tasks }) {
  const compleatTasksValue = tasks?.filter((task) => task.completed);
  // calculate progress bar value
  const progress = Math.round(
    (compleatTasksValue.length * 100) / tasks?.length
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Tooltip title={`${progress}% compleat`}>
        <BorderLinearProgress variant="determinate" value={progress} />
      </Tooltip>
    </Box>
  );
}
