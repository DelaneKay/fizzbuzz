import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaGitlab, FaCode } from 'react-icons/fa';

function GitRepo() {
  const githubUrl = 'https://github.com/DelaneKay/fizzbuzz/tree/master';
  const gitlabUrl = 'https://gitlab.com/kudakwashe-sibanda/fizzbuzz/-/tree/master/public';

  return (
    <Container>
      <Row>
        <Col className="text-center" style={{ marginTop: '100px' }}>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', margin: '0 10px' }}>
              <FaCode size={102} />
            </a>
          <h3>Code Repositories</h3>
          <p>
            Thank you for visiting! If you're curious about the code behind this React app (FizzBuzz), feel free to explore the repositories below:
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', margin: '0 10px' }}>
              <FaGithub size={32} />
              <span style={{ marginLeft: '5px' }}>GitHub Repository</span>
            </a>
            <a href={gitlabUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', margin: '0 10px' }}>
              <FaGitlab size={32} />
              <span style={{ marginLeft: '5px' }}>GitLab Repository</span>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default GitRepo;
