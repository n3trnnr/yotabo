import { IProjectDescriptionPage } from "./ProjectDescriptionPage.props";

const ProjectDescriptionPage = ({ project }: IProjectDescriptionPage) => {

    // console.log('ProjectDescriptionPage', project);

    return (
        <>
            <div>{project?.attributes.title}</div>
            <div>{project?.attributes.description}</div>
            <div>{new Date(project?.attributes.createdAt || 0).toLocaleDateString()}</div>
        </>
    );
}

export default ProjectDescriptionPage;