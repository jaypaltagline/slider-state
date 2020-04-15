import React from "react";
import { Paper, Tabs, Tab } from '@material-ui/core'

export default ({ muscles, category, onSelect }) => {

  const index = category ?
    muscles.findIndex(group => group === category) + 1 :
    0

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? '' : muscles[index - 1])

  return <Paper xs={12} sm={6} >
    <Tabs
      value={index}
      onChange={onIndexSelect}
      indicatorColor="primary"
      textColor="primary"
      scrollButtons="auto"
      centered
      
    >
      <Tab label="All" />
      {
        muscles.map((group, index) => {

          return <Tab key={index} label={group} />

        })
      }

    </Tabs>
  </Paper>

}





