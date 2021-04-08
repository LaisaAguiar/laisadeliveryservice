import {fade, withStyles} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';


export const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #c4c4c4',
    fontSize: 16,
    width: 'auto',
    padding: '10px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Roboto'].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);