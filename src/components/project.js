import React from 'react';
import { Card } from "react-bootstrap";

const Project = ({ project }) => (
        <Card className='col-5 my-4 border-secondary'>
            <Card.Body>
              <Card.Header className='text-muted'>
                 {project.topic.join(', ')}
              </Card.Header>
              <Card.Title className='display-6 mt-2'><a href={project.url} target='_blank' className='text-decoration-none text-dark'>{project.title}</a></Card.Title>
              <Card.Text>
                  {project.description}
              </Card.Text>
              <Card.Text className='fw-bold text-end'>
                  <a href={project.sample} target='_blank' className='btn btn-outline-secondary'> Sample text</a>
              </Card.Text>
              <Card.Footer className='text-muted'>{project.language.join(', ')}</Card.Footer>
            </Card.Body>
        </Card>
);

export default Project;