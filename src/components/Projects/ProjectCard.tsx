import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectImage: string; // Optional image URL
  children?: React.ReactNode; // Optional children for additional content
}

function ProjectCard(props: ProjectCardProps) {
  const { projectTitle, projectDescription, projectImage, children } = props;
  /*
  return (
    <Card bg="dark">
      <Card.Img variant="top" src={projectImage} />
      <Card.Header>{projectTitle}</Card.Header>
      <Card.Body>
        <Card.Text>{projectDescription}</Card.Text>
        <div>{children}</div>
      </Card.Body>
    </Card>
  );
  */
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={projectImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {projectDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Live Demo
        </Button>
        <Button variant="outlined" size="small">
          Code
        </Button>
      </CardActions>
      <div>{children}</div>
    </Card>
  );
}
export default ProjectCard;
