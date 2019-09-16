import React, { useState, useContext, cloneElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import FaceTwoToneIcon from '@material-ui/icons/FaceTwoTone'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone'
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone'
import HowToVoteTwoToneIcon from '@material-ui/icons/HowToVoteTwoTone'
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone'
import LocalTaxiTwoToneIcon from '@material-ui/icons/LocalTaxiTwoTone'
import ApartmentTwoToneIcon from '@material-ui/icons/ApartmentTwoTone'
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone'
import RestaurantTwoToneIcon from '@material-ui/icons/RestaurantTwoTone'
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone'
import SupervisedUserCircleTwoToneIcon from '@material-ui/icons/SupervisedUserCircleTwoTone'
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone'
import HeadsetMicTwoToneIcon from '@material-ui/icons/HeadsetMicTwoTone'
import WarningTwoToneIcon from '@material-ui/icons/WarningTwoTone'
import DrawerContext from './drawer-context'

const useLinkStyles = makeStyles((theme) => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}))

function SmartLink({
  to, children, ...props
}) {
  const classes = useLinkStyles()
  const setOpen = useContext(DrawerContext)

  const navClicked = () => setOpen(false)

  return to ? to.startsWith('http') ? (
    <a className={classes.link} href={to}>
      {children}
    </a>
  ) : (
    <NavLink className={classes.link} to={to} {...props} onClick={navClicked}>
      {children}
    </NavLink>
  ) : (
    <>
      {children}
    </>
  )
}

function NavItem({
  label, to, icon, children, ...props
}) {
  const [active, setActive] = useState(false)

  // test 'to' prop so we don't setActive on empty link
  const isActive = (match) => setActive(match && match.isExact)

  return (
    <SmartLink to={to} isActive={isActive}>
      <ListItem button selected={active} {...props}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
        {children}
      </ListItem>
    </SmartLink>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

function NestedListItem({ children, ...props }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen(!open)
  }

  const styledChildren = React.Children.map(children, (child) => (
    cloneElement(child, { className: classes.nested })
  ))

  return (
    <div>
      <NavItem {...props} onClick={handleClick}>
        {open ? <ExpandLess /> : <ExpandMore />}
      </NavItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {styledChildren}
        </List>
      </Collapse>
    </div>
  )
}

export default function NavContents({ className }) {
  const classes = useStyles()

  return (
    <List
      component="nav"
      className={clsx(className, classes.root)}
    >
      <NavItem label="Home" to="/" icon={<HomeTwoToneIcon />} />
      <NavItem label="About" to="/about" icon={<FaceTwoToneIcon />} />
      <NestedListItem label="Guides" icon={<ListAltTwoToneIcon />}>
        <NavItem label="Immigration" to="/guides/immigration" icon={<PublicTwoToneIcon />} />
        <NavItem label="Eviction" to="/guides/eviction" icon={<ApartmentTwoToneIcon />} />
        <NavItem label="Food" to="/guides/food" icon={<RestaurantTwoToneIcon />} />
        <NavItem label="Dealing with police" to="/guides/police" icon={<LocalTaxiTwoToneIcon />} />
        <NavItem label="Voting" to="/guides/voting" icon={<HowToVoteTwoToneIcon />} />
        <NavItem label="Workplace discrimination" to="/guides/work-discrimination" icon={<SupervisedUserCircleTwoToneIcon />} />
        <NavItem label="Starting a union" to="/guides/union" icon={<PeopleAltTwoToneIcon />} divider />
      </NestedListItem>
      <NestedListItem label="Issues" icon={<WarningTwoToneIcon />}>
        <NavItem label="Housing and Homelessness" to="/issues/hnh" icon={<HomeWorkTwoToneIcon />} />
        <NavItem label="Immigration" to="/issues/immigration" icon={<PublicTwoToneIcon />} divider />
      </NestedListItem>
      <NestedListItem label="Local News" icon={<MenuBookTwoToneIcon />}>
        <NavItem label="KNOCK.LA" to="https://knock.la" icon={<MenuBookTwoToneIcon />} />
        <NavItem label="Ground Game Podcast" to="https://soundcloud.com/groundgamela" icon={<HeadsetMicTwoToneIcon />} />
      </NestedListItem>
    </List>
  )
}
