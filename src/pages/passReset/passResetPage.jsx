import * as React from 'react';
import PassReset from '../../components/passReset/PassReset';

export default function PassResetPage() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <PassReset setEmail={setEmail} email={email} setPassword={setPassword} setNewPassword={setNewPassword} handleSubmit={handleSubmit} />
  );
}