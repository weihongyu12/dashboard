import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import {
  ListItem, Button, Collapse,
} from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <RouterLink {...props} />
  </div>
));

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    justifyContent: 'flex-start',
    width: '100%',
    padding: '10px 8px',
    color: blueGrey[800],
    textTransform: 'none',
    letterSpacing: 0,
  },
  buttonLeaf: {
    justifyContent: 'flex-start',
    width: '100%',
    padding: '10px 8px',
    fontWeight: theme.typography.fontWeightRegular,
    color: blueGrey[800],
    textTransform: 'none',
    letterSpacing: 0,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
    color: theme.palette.icon,
  },
  expandIcon: {
    width: 16,
    height: 16,
    marginLeft: 'auto',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  active: {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.main,
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
}));

const NavigationListItem = (props) => {
  const {
    title,
    href,
    depth,
    children,
    icon: Icon,
    className,
    open: openProp,
    label: Label,
  } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = {
    paddingLeft,
  };

  if (children) {
    return (
      <ListItem
        className={clsx(classes.item, className)}
        disableGutters
      >
        <Button
          className={classes.button}
          onClick={handleToggle}
          style={style}
        >
          {Icon && <Icon className={classes.icon} />}
          {title}
          {open ? (
            <ExpandLessIcon
              className={classes.expandIcon}
              color="inherit"
            />
          ) : (
            <ExpandMoreIcon
              className={classes.expandIcon}
              color="inherit"
            />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }
  return (
    <ListItem
      className={clsx(classes.itemLeaf, className)}
      disableGutters
    >
      <Button
        activeClassName={classes.active}
        className={clsx(classes.buttonLeaf, `depth-${depth}`)}
        component={CustomRouterLink}
        exact
        style={style}
        to={href}
        isActive={(match, location) => {
          if (!match) {
            return false;
          }
          if (match.url === location.pathname) {
            if (location.search) {
              return `${location.pathname}${location.search}` === href;
            }
            return true;
          }
          return false;
        }}
      >
        {Icon && <Icon className={classes.icon} />}
        {title}
        {Label && (
        <span className={classes.label}>
          <Label />
        </span>
        )}
      </Button>
    </ListItem>
  );
};

NavigationListItem.propTypes = {
  depth: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  label: PropTypes.elementType,
  open: PropTypes.bool,
};

NavigationListItem.defaultProps = {
  children: null,
  className: '',
  href: '',
  icon: null,
  label: null,
  open: false,
};

export default NavigationListItem;
