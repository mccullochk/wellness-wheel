import React, { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'
import { Svg } from '../styles/WellnessWheel.styles'

const width = 600
const height = 500
const radius = (Math.min(width, height) / 2) * 1.15
const maxValue = 10

function Pie({ data, updateData }) {
  const ref = useRef()

  function updateItemValue(index, value) {
    const values = [...data]
    values.splice(index, 1, { name: data[index].name, value })
    updateData(values)
  }

  const pie = d3
    .pie()
    .sort(null)
    .value(10)

  const scale = d3.scaleLinear()

  function getMiddleArcs(pos) {
    return d3
      .arc()
      .outerRadius((height / 2) * (pos / maxValue))
      .innerRadius(pos - 1)
  }

  const arcFill = d3
    .arc()
    .outerRadius(d => (height / 2) * (d.data.value / maxValue))
    .innerRadius(0)

  const arcLabel = d3
    .arc()
    .innerRadius(radius)
    .outerRadius(radius)

  const color = d3
    .scaleOrdinal()
    .domain(data.map(d => d.name))
    .range(
      d3
        .quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length)
        .reverse()
    )

  const arcs = pie(data)

  function writeD3() {
    const svg = d3
      .select(ref.current)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .attr('width', width)
      .style('height', height + 100)

    const g = svg
      .selectAll('path')
      .data(arcs)
      .enter()
      .append('g')
      .attr('class', 'arc')

    g.append('path')
      .attr('stroke', '#9e9e9e')
      .attr('d', getMiddleArcs(10))
      .style('fill', 'rgba(0,0,0,0.2)')
      .on('click', (event, d) => updateItemValue(d.index, 10))

    g.append('path')
      .attr('stroke', '#9e9e9e')
      .attr('d', getMiddleArcs(9))
      .style('fill', 'rgba(0,0,0,0.2)')
      .on('click', (event, d) => updateItemValue(d.index, 9))

    g.append('path')
      .attr('stroke', '#9e9e9e')
      .attr('d', getMiddleArcs(8))
      .style('fill', 'rgba(0,0,0,0.2)')
      .on('click', (event, d) => updateItemValue(d.index, 8))

    g.append('path')
      .attr('stroke', '#9e9e9e')
      .attr('d', getMiddleArcs(7))
      .style('fill', 'rgba(0,0,0,0.2)')
      .on('click', (event, d) => updateItemValue(d.index, 7))

    g.append('path')
      .attr('stroke', '#9e9e9e')
      .attr('d', getMiddleArcs(6))
      .style('fill', 'rgba(0,0,0,0.2)')
      .on('click', (event, d) => updateItemValue(d.index, 6))

    g.append('path')
      .attr('stroke', '#9e9e9e')
      .attr('d', getMiddleArcs(5))
      .style('fill', 'rgba(0,0,0,0.2)')
      .on('click', (event, d) => updateItemValue(d.index, 5))

    g.append('path')
      .attr('stroke', '#9e9e9e')
      .attr('d', getMiddleArcs(4))
      .style('fill', 'rgba(0,0,0,0.2)')
      .on('click', (event, d) => updateItemValue(d.index, 4))

    g.append('path')
      .attr('stroke', '#9e9e9e')
      .attr('d', getMiddleArcs(3))
      .style('fill', 'rgba(0,0,0,0.2)')
      .on('click', (event, d) => updateItemValue(d.index, 3))

    g.append('path')
      .attr('stroke', '#9e9e9e')
      .attr('d', getMiddleArcs(2))
      .style('fill', 'rgba(0,0,0,0.2)')
      .on('click', (event, d) => updateItemValue(d.index, 2))

    g.append('path')
      .attr('stroke', '#9e9e9e')
      .attr('d', getMiddleArcs(1))
      .style('fill', 'rgba(0,0,0,0.2)')
      .on('click', (event, d) => updateItemValue(d.index, 1))

    g.append('path')
      .attr('d', arcFill)
      .attr('class', d => 'fill')
      .style('fill', d => color(d.data.name))
      .on('click', (event, d) => updateItemValue(d.index, 0))

    svg
      .append('g')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 12)
      .attr('text-anchor', 'middle')
      .selectAll('text')
      .data(arcs)
      .join('text')
      .attr('transform', d => `translate(${arcLabel.centroid(d)})`)
      .attr('letter-spacing', '1')
      .call(text =>
        text
          .append('tspan')
          .attr('y', '-0.4em')
          .attr('font-weight', 'bold')
          .attr('fill', 'black')
          .text(d => d.data.name)
      )
      .call(text =>
        text
          .filter(d => d.endAngle - d.startAngle > 0.25)
          .append('tspan')
          .attr('x', 0)
          .attr('y', '0.7em')
          .attr('fill-opacity', 0.7)
          .attr('fill', 'black')
          .text(d => d.data.value.toLocaleString())
      )
  }

  useEffect(() => {
    d3.selectAll('path').remove()
    d3.selectAll('text').remove()

    writeD3()
  }, [data])

  return <Svg ref={ref} id="wheel" />
}

export default Pie
