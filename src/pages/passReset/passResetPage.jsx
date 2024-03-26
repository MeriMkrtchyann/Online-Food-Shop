import * as React from 'react';
import PassReset from '../../components/passReset/PassReset';

export default function PassResetPage() {

    const [email, setEmail] = React.useState('');

    const handleSubmit = async (event) => {
    event.preventDefault();
};

  return (
    <PassReset setEmail={setEmail} handleSubmit={handleSubmit}/>
  );
}