import React, {type FC} from 'react';

import {TextField, type TextFieldProps} from '@mui/material';

type Props = TextFieldProps & {
  pattern?: string | RegExp;
};

const onChangeWithPattern = (pattern: Props['pattern'], onChange: TextFieldProps['onChange']) => {
  return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!pattern) {
      onChange?.(event);
      return;
    }
    if (event.target.value.match(pattern) || !event.target.value) {
      onChange?.(event);
    }
  };
};

const Input: FC<Props> = ({pattern, onChange, ...rest}) => {
  const handleChange = onChangeWithPattern(pattern, onChange);
  return <TextField onChange={handleChange} {...rest} />;
};

Input.displayName = 'Input';
export default Input;
