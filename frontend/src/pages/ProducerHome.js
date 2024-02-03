import React from 'react'
// import AvailableMicrogrid from '../components/AvailableMicrogrid';
import ProducerMicrogrid from '../components/ProducerMicroGrid';
import ProducerNavbar from './ProducerNavbar';

function ProducerHome(props) {
  
  return (
    <div>
      <ProducerNavbar />
      <ProducerMicrogrid />
      
    </div>
  );
}
export default ProducerHome