import React, { useState } from 'react';

import Button from 'components/Button';
import { FormContainer, Input, Label } from './Form.style';

const Form = ({ onSearch }) => {
  const [subreddit, setSubreddit] = useState('reactjs');

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(subreddit);
  };

  return (
    <FormContainer
      onSubmit={onSubmit}
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
    >
      <Button type="submit">Show me the posts</Button>
      <Label>
        <span>r /</span>
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
