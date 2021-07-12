### 设置变体

```jsx
<Label variant="contained">contained</Label>
<Label variant="outlined">outlined</Label>
```

### 设置形状

```jsx
<Label shape="square">square</Label>
<Label shape="rounded">rounded</Label>
```

### 自定义颜色

```jsx
import {
  blue,
  orange,
  red,
  green,
} from '@material-ui/core/colors';

<>
  <Label color={blue[500]} variant="contained">blue</Label>
  <Label color={orange[500]} variant="contained">orange</Label>
  <Label color={green[500]} variant="contained">green</Label>
  <Label color={red[500]} variant="contained">red</Label>

  <Label color={blue[500]} variant="outlined">blue</Label>
  <Label color={orange[500]} variant="outlined">orange</Label>
  <Label color={green[500]} variant="outlined">green</Label>
  <Label color={red[500]} variant="outlined">red</Label>
</>
```
