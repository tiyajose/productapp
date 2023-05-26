import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function JustifiedExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Home">
       
      </Tab>
      <Tab eventKey="profile" title="Profile">
       
      </Tab>
      <Tab eventKey="longer-tab" title="Login">
       
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
       
      </Tab>
    </Tabs>
  );
}

export default JustifiedExample;