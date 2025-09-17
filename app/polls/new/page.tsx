"use client";

import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Form } from '../../../components/ui/form';

const NewPollPage = () => {
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle poll creation logic here
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Create a New Poll</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Poll Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        {options.map((option, index) => (
          <Input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            required
          />
        ))}
        <Button type="button" onClick={addOption}>
          Add Option
        </Button>
        <Button type="submit">Create Poll</Button>
      </Form>
    </div>
  );
};

export default NewPollPage;