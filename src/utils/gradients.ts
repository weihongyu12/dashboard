import {
  red,
  blue,
  indigo,
  green,
  orange,
  grey,
} from '@material-ui/core/colors';

const buildGradient = (start: string, end: string) => `linear-gradient(180deg, ${start} 0%, ${end} 100%)`;

const greyGradient = buildGradient(grey[400], grey[600]);
const blueGradient = buildGradient(blue[700], blue[900]);
const indigoGradient = buildGradient(indigo[400], indigo[600]);
const greenGradient = buildGradient(green[400], green[600]);
const orangeGradient = buildGradient(orange[400], orange[700]);
const redGradient = buildGradient(red[500], red[700]);

export default {
  grey: greyGradient,
  blue: blueGradient,
  indigo: indigoGradient,
  green: greenGradient,
  orange: orangeGradient,
  red: redGradient,
};
