import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary,
    fontSize: 18,
    weight: 800,
    color: 'darkblue'
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: '32px',
    overflowX: 'auto',
  },
  item:{
    marginTop:'32px',
    justify: 'center',
    margin: 'auto',
    padding: '2px',
  },
  
  table: {
    minWidth: 700,
    margin: 'auto',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  font:{
    color: 'white',
    margin: 'auto'
  },
  text:{
    color: 'white',
    padding: '24px'
  },
  button:{
    margin: theme.spacing.unit,
    color: 'darkblue'
  }
});

let id = 0;
function createData(name, price) {
  id += 1;
  return { id, name, price };
}

const rows = [
  createData('male haircut', '11.40 £'),
  createData('female haircut (long hair)', '19,38 £'),
  createData('female haircut (medium hair)', '17,10 £'),
  createData('hair coloring', '22,80 £'),
  createData('beard trim', '5,70 £'),
  createData('manicure', '17,10 £'),
];

function PriceTable(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <Grid  container spasing={24} style={{background:'rgba(0,0,255,0.1)'}} >
    <Grid item sm={12} className={classes.item}>
    <Typography component="h3" variant="h5" className={classes.text}>  
          You can find information about the cost of services in our salon below:
    </Typography>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Service</CustomTableCell>
            <CustomTableCell numeric>Price</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell numeric>{row.price}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    <Typography className={classes.text} component="p" variant="h6">
          If you still have any questions, please call us +44-7871234567 or 
          ask us a question <br/> in our 
          <Button href="https://www.instagram.com/yuliya_donut/?hl=bn" className={classes.button}>
              Instagram
          </Button> or in our
          <Button href="https://vk.com/id154603815" className={classes.button}>
          VKontakte
          </Button>
          .
    </Typography>
    </Grid>
    </Grid>
    </div>
  );
}

PriceTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PriceTable);
