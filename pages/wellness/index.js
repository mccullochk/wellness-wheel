import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IconButton, Input } from '@material-ui/core'
import { Delete, Add } from '@material-ui/icons'
import WellnessWheel from '../../components/WellnessWheel'
import Form from '../../components/Form'
import { Page, Background } from '../../styles/global.styles'
import {
  WheelPage,
  Content,
  WheelInstructions,
  ItemList,
  Item,
  CallToAction
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

function Wellness() {
  const ref = useRef()
  const [data, updateData] = useState(initialData)

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
        <h1>Wheel of Wellness</h1>

        <WellnessWheel data={data} updateData={updateData} />

        <Content
          ref={ref}
          elevation={24}
          onClick={() => ref.current.scrollIntoView({ behavior: 'smooth' })}>
          <WheelInstructions>
            <h2>Instructions</h2>
            <p>
              Each slice of this wheel represents an aspect of your life. In
              order for the wheel to roll smoothly each section needs roughly
              equal attention. Rank each section based on your level of
              satisfaction with that area of your life. <b>10</b> means
              completely satisfied and <b>0</b> means completely unsatisfied.
              How you interpret that is up to you. Which areas of your life you
              choose to include is also up to you. Add, remove, change the pie
              slices to what is impactful for you. The perimeter you get
              represents <b>YOUR</b> wheel.{' '}
              <i>How well does your wheel roll?</i>
            </p>

            <CallToAction>
              🤔 What <b>5 minute action</b> are you{' '}
              <b>ready, willing, and able</b> to take today in pursuit of
              positive change?
            </CallToAction>
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
        </Content>

        <h3>Enter your email and receive a free copy of your wheel</h3>
        <Form />
      </WheelPage>
    </Page>
  )
}

export default Wellness
