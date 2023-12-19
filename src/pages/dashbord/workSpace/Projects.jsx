import { Box } from "@mui/material";
import { useGetProjectsQuery } from "../../../redux/features/project/projectApi";
import OutlinedCard from "./ProjectCard";

export default function Projects() {
  const { data = [] } = useGetProjectsQuery();

  console.log(data)

  return <Box>
    {
      data.map(d=> <OutlinedCard key={d._id} data={d}/>)
    }
    
  </Box>
}
