import {useQuery} from "@apollo/client";
import {GET_PROJECTS} from "../queries/projectQueries";
import {Spinner} from "./Spinner";
import {IProjects} from "../types/graphql.interface";
import {ProjectCard} from "./ProjectCard";

export const Projects = () => {
  const { loading, error, data } = useQuery<IProjects>(GET_PROJECTS)

  if (loading) return <Spinner />
  if (error) return <p>Something Went Wrong</p>

  return (
    <>
      {data && data.projects.length > 0
        ? (
          <div className={'row'}>
            { data.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            )) }
          </div>
        ) : (
          <p>No Project</p>
        )
      }
    </>
  )
}