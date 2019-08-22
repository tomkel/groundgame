import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/styles'
import { makeStyles, fade, withStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'
import Collapse from '@material-ui/core/Collapse'
import AndroidIcon from '@material-ui/icons/Android'
import { useSpring, animated } from 'react-spring'
import { Link } from '@reach/router'

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  )
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  )
}

function CloseSquare(props) {
  return (
    <SvgIcon className="close" fontSize="inherit" {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  )
}

function Spacer() {
  return (
    <div style={{ width: '0px' }} />
  )
}

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
  })

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  )
}

TransitionComponent.propTypes = {
  /**
   * Show the component triggers the enter or exit states
   */
  in: PropTypes.bool,
}

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    '& .close': {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 12,
    paddingLeft: 12,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
  },
  label: {
    margin: theme.spacing(1),
  },
  root: {
    '&:focus > $content': {
      backgroundColor: 'red',
    },
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  }

}))((props) => {
  const { classes } = props
  const treeItem = <TreeItem {...props} TransitionComponent={TransitionComponent} />

  return props.to ? props.to.startsWith('http') ? (
    <a className={classes.link} href={props.to}>
      {treeItem}
    </a>
  ) : (
    <Link className={classes.link} to={props.to}>
      {treeItem}
    </Link>
  ) : treeItem
})

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(3),
  },
}))

export default function CustomizedTreeView() {
  const classes = useStyles()

 const getNodeId = (() => {
    let nodeId = 0
    return () => {
      nodeId += 1
      return String(nodeId)
    }
  })()

  return (
    <TreeView
      defaultExpanded={['1']}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      classes={{ root: classes.root }}
    >
      <StyledTreeItem nodeId={getNodeId()} label="About" to="about" />
      <StyledTreeItem nodeId={getNodeId()} label="Community Resource Guides">
        <StyledTreeItem nodeId={getNodeId()} label="Immigration" to="guides/immigration" />
        <StyledTreeItem nodeId={getNodeId()} label="Eviction" to="guides/eviction" />
        <StyledTreeItem nodeId={getNodeId()} label="Food" to="guides/food" />
        <StyledTreeItem nodeId={getNodeId()} label="Dealing with police" to="guides/police" />
        <StyledTreeItem nodeId={getNodeId()} label="Voting" to="guides/voting" />
        <StyledTreeItem nodeId={getNodeId()} label="Workplace discrimination" to="guides/work-discrimination" />
        <StyledTreeItem nodeId={getNodeId()} label="Starting a union" to="guides/union" />
      </StyledTreeItem>
      <StyledTreeItem nodeId={getNodeId()} label="Issues">
        <StyledTreeItem nodeId={getNodeId()} label="Housing and Homelessness" to="issues/hnh" />
        <StyledTreeItem nodeId={getNodeId()} label="Immigration" to="issues/immigration" />
      </StyledTreeItem>
      <StyledTreeItem nodeId={getNodeId()} label="Local News">
        <StyledTreeItem nodeId={getNodeId()} label="KNOCK.LA" to="https://knock.la" />
        <StyledTreeItem nodeId={getNodeId()} label="Ground Game Podcast" to="https://soundcloud.com/groundgamela"/>
      </StyledTreeItem>
    </TreeView>
  )
}
