import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  AppBar,
  IconButton,
  Input,
  Drawer,
  Toolbar,
  Typography,
  makeStyles,
  useTheme
} from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import * as htmlToImage from 'html-to-image'
import WellnessWheel from '../../components/WellnessWheel'
import Form from '../../components/Form'
import { Page, Background } from '../../styles/global.styles'
import {
  WheelPage,
  WheelInstructions,
  ItemList,
  Item,
  CallToAction,
  Break
} from '../../styles/WellnessWheel.styles.js'

const initialData = [
  { name: 'Nutrition', value: 10 },
  { name: 'Movement', value: 5 },
  { name: 'Mindset', value: 4 },
  { name: 'Stress', value: 0 },
  { name: 'Finances', value: 7 },
  { name: 'Career', value: 3 },
  { name: 'Play', value: 9 },
  { name: 'Social', value: 8 }
]

const drawerWidth = 300

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#08082a',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  drawerPaper: {
    maxWidth: drawerWidth,
    padding: 20,
    flex: 1
  },
  menuButton: {
    fontSize: 12,
    color: 'white',
    width: 'max-content',
    marginRight: 20
  },
  menuButtonClose: {
    color: 'black',
    padding: 0,
    alignSelf: 'flex-start'
  },
  title: {
    margin: '0 !important'
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px'
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: 0,
    marginTop: 30,
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  }
}))

function Wellness() {
  const theme = useTheme()
  const [data, updateData] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const [open, setDrawerOpen] = useState(true)

  const classes = useStyles()

  function updateItemName(index, name) {
    const values = [...data]
    values.splice(index, 1, { name, value: data[index].value })
    updateData(values)
  }

  function removeItem(index) {
    const values = [...data]
    values.splice(index, 1)
    updateData(values)
  }

  function addItem() {
    const values = [...data, { name: '', value: 0 }]
    updateData(values)
  }

  async function handleSubmit(email) {
    // Email wheel as PNG
    setLoading(true)
    const svg = document.querySelector('.wheel')

    const image = await htmlToImage.toPng(svg, {
      backgroundColor: 'white'
    })

    const today = new Date(Date.now())
    const body = {
      today: today.toDateString(),
      email,
      image
    }

    //writeRequest(email, data)

    fetch('/api/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    setLoading(false)
  }

  return (
    <Page>
      <Background>
        <Image
          alt="Stone"
          src="/white-brick.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Background>

      <WheelPage>
        <AppBar
          position="static"
          className={`${classes.appBar} ${open ? classes.appBarShift : ''}`}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h1" className={classes.title}>
              Wheel of Wellness
            </Typography>
            <IconButton
              aria-label="menu"
              onClick={() => setDrawerOpen(!open)}
              className={classes.menuButton}>
              {!open && <ChevronLeft />}
              {!open && 'Instructions'}
            </IconButton>
          </Toolbar>
        </AppBar>

        <main
          className={`${classes.content} ${open ? classes.contentShift : ''}`}>
          <WellnessWheel data={data} updateData={updateData} />
        </main>

        <Drawer
          variant={'persistent'}
          anchor={'right'}
          onClose={() => setDrawerOpen(false)}
          classes={{
            paper: classes.drawerPaper
          }}
          open={open}>
          <WheelInstructions>
            <IconButton
              open={open}
              aria-label="menu"
              onClick={() => setDrawerOpen(!open)}
              className={classes.menuButtonClose}>
              {open && 'x'}
            </IconButton>
            <h2>Instructions</h2>
            <p>
              Each slice of this wheel represents an aspect of your life, work,
              or other focus area. In order for the wheel to roll smoothly each
              section needs roughly equal attention. Rank each section based on
              your level of satisfaction with that area. <b>10</b> means
              completely satisfied and <b>0</b> means completely unsatisfied.
              How you interpret that is up to you. Which areas you choose to
              include is also up to you. Add, remove, change the pie slices to
              what is impactful for you. The perimeter you get represents{' '}
              <b>YOUR</b> wheel. <i>How well does your wheel roll?</i>
            </p>
          </WheelInstructions>
          <ItemList>
            <h2>Focus Areas</h2>
            {data.map((item, index) => (
              <div key={index}>
                <Input
                  id={`input${index}`}
                  value={item.name}
                  onChange={event => updateItemName(index, event.target.value)}
                />
                <IconButton
                  label="remove"
                  id="delete"
                  size="small"
                  onClick={() => removeItem(index)}>
                  𝘅
                </IconButton>
              </div>
            ))}
            <IconButton
              label="add"
              id="addNew"
              onClick={addItem}
              style={{ fontSize: 12 }}>
              Add +
            </IconButton>
          </ItemList>

          <CallToAction font="fantasy">
            🤔 What <b>5 minute action</b> are you{' '}
            <b>ready, willing, and able</b> to take today in pursuit of positive
            change?
          </CallToAction>

          <Break />

          <h3>Enter your email and receive a free copy of your wheel</h3>
          <Form handleSubmit={handleSubmit} loading={loading} />
        </Drawer>
      </WheelPage>
    </Page>
  )
}

export default Wellness
