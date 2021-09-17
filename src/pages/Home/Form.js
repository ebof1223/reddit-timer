import Button from 'components/Button';
import React, { useState } from 'react';

import { FormContainer, Input, Label } from './Form.style';

const Form = ({ onSearch }) => {
  const [subreddit, setSubreddit] = useState('javascript');

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(subreddit);
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <Button type="submit">Show me the best time</Button>
      <Label>
        r /
        <Input
          type="text"
          name="subreddit"
          value={subreddit}
          onChange={(event) => setSubreddit(event.target.value)}
        />
      </Label>
    </FormContainer>
  );
};

export default Form;
