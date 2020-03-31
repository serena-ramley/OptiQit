import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export const ExplanationDoubleSlit = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Showing...');

  const onEntered = () => setStatus('Shown');

  const onExiting = () => setStatus('Hiding...');

  const onExited = () => setStatus('Hidden');

  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Show/Hide Explanation</Button>
      <h2>Explanation: {status}</h2>
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

