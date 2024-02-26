import * as React from 'react'
import { NotionRenderer } from 'react-notion-x'

export default ({ recordMap }: {recordMap:any}) => (
  <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
)