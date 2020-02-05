/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import PeopleIcon from '@material-ui/icons/People';
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Employees"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={PeopleIcon}
          dropdownList={[
            <Link href="/login">
              <a className={classes.dropdownLink}>Login</a>
            </Link>,
            <a
              href="/login"
              target="_blank"
              className={classes.dropdownLink}
            >
              Register
            </a>
          ]}
        />
      </ListItem>
      
      <ListItem className={classes.listItem}>
        
        <Tooltip
          id="linkedin"
          title="Follow us on LinkedIn"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/company/accolade-technologies-llc/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
