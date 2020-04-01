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
      <h2>Explanation: {status}</h2>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Show/Hide Explanation</Button>
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <Card>
          <CardBody>
            <p> 
            You should be seeing bands or fringes of bright areas and dark areas. This is because light has wave-like properites. The center fringe is bright because the light
            from both slits travel the same distance. This means the light waves from both slits hit the wall at the same phase (peaks with peaks, troughs with troughs).
            This is contstructive interference, meaning they add together creating a bright spot.
            Moving a little to the left or right the shows a dark fringe. This means that the light from one slit has to travel slightly further making the light hitting the wall a a different phase.
            A peak and a trough will cancel eachtother out creating a dark fringe. This is called deconstructive interferance.
            Moving even further the light travels enough to repeat the process.
            </p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}


export const ExplanationLowPhotonDoubleSlit = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');
  const onEntering = () => setStatus('Showing...');
  const onEntered = () => setStatus('Shown');
  const onExiting = () => setStatus('Hiding...');
  const onExited = () => setStatus('Hidden');
  const toggle = () => setCollapse(!collapse);

  return (
    <div>  
      <h2>Explanation: {status}</h2>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Show/Hide Explanation</Button>
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <Card>
          <CardBody>
            <p> 
            Interestingly enough you should still be able to see the interference pattern even when working with 'single-photons'.
            Photons can be considered as particles, but particles passing through slits should appear as slits on the other side. However, light is both a particle and wave.
            This is a demonstration of the quantum principle. How could this be? It is sometimes theorized that the photons "interfere" with eachother as they pase through
            creating the pattern. However, this experiement can ran with only one particle at a time, making interference between photons impossible, and the pattern still appears.
            Another theory is that the photon somehow passes through boths slits simutaneously, interference with itself, and recombinining before hittting the wall.
            To test this scientists place detectors at each slit to see which slit the particle travels through. Interestingly enough, the mere act of measuring changed the result. 
            The interference pattern no longer appears, rather only two bands shows. This is anouther qunatum principle. Observing the photons actually changes the system. 
            Why do you think that happens? 

            </p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

