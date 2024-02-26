// "use client"
import {
  Backdrop,
  Box,
  CircularProgress,
  Skeleton,
  Stack,
} from "@mui/material";

export default function loading() {
  return (
    <div>
      <Stack spacing={1}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton width={210} sx={{ fontSize: "1rem" }} />

        <Skeleton variant="rectangular" width="100%" height={500} />
        <Stack direction="row">
          <Skeleton variant="rounded" width="50%" height={200} />
          <Skeleton variant="circular" width="45%" height={500}/>
        </Stack>
      </Stack>
    </div>
  );
}
