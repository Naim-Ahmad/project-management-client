import { Box, Skeleton } from "@mui/material";
import { useGetProjectsQuery } from "../../../redux/features/project/projectApi";
import OutlinedCard from "./ProjectCard";

export default function Projects() {
  const { data = [], isLoading } = useGetProjectsQuery();

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton variant="rectangular" width={320} height={300} />
        <Skeleton variant="rectangular" width={320} height={300} />
        <Skeleton variant="rectangular" width={320} height={300} />
        <Skeleton variant="rectangular" width={320} height={300} />
      </>
    );
  }
  if (data?.length > 0) {
    content = data.map((d) => <OutlinedCard key={d._id} data={d} />);
  }

  return (
    <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {content}
    </Box>
  );
}
