import { useGetProjectsQuery } from "../../../redux/features/project/projectApi";

export default function Projects() {
  const { data } = useGetProjectsQuery();


  return <div>Projects</div>;
}
