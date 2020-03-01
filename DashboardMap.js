import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Divider from '@material-ui/core/Divider';
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import UpdateIcon from '@material-ui/icons/Update';
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import WorldMap from './WorldMap';
import DialChart from './Dial.js';
import Bar from './Bar.js';
import HeatMap from './HeatMap.js';

import MapWorld from './MapWorld.js';
import { bugs, website, server } from "variables/general.js";


import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart
  } from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
  
export default function DashboardMap() {
    const classes = useStyles();
    return (
      <div>
            <Typography variant="h4"  align='center' className={classes.cardTitle}>
                Intelligent Renewal Management
            </Typography>
            <Divider/>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3} >
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Account Growth</p>
              <h3 className={classes.cardTitle}>
                50
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Improve Portfolio
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <EuroSymbolIcon/>
              </CardIcon>
              <p className={classes.cardCategory}>Average Retention Rate</p>
              <h3 className={classes.cardTitle}>$300</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Average Order Value</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Deal Conversion Rate</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
</GridContainer>
{
//     
//      <GridContainer alignItems="center"> 
//        <GridItem md={4}>
//          <DialChart/>
//        </GridItem>
// <GridItem md={4}>
//          <Bar/>
//  
//        </GridItem>
//  <GridItem md={4}>
//          <HeatMap/>
//        </GridItem>
//
//       
//
// 
//      </GridContainer> 
}

    <MapWorld />

    </div>
    );
}