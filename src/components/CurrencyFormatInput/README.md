```jsx
import {
  TextField,
} from '@material-ui/core';

<>
  <TextField
    label="prefix"
    variant="outlined"
    InputProps={{
      inputComponent: CurrencyFormatInput,
      inputProps: {
        prefix: '¥',
      },
    }}
  />
  <TextField
    label="suffix"
    variant="outlined"
    InputProps={{
      inputComponent: CurrencyFormatInput,
      inputProps: {
        suffix: '元',
      },
    }}
  />
</>
```


