import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form } from '@/components/ui/form';

const RegisterPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="username" placeholder="Username" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="password" name="password" placeholder="Password" required />
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default RegisterPage;