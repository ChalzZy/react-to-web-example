import { useState, useEffect } from 'react'
import { Widget as WidgetModel } from '../../models/Widget'
import { getWidgets } from '../apiClient'
import { WidgetList } from './WidgetList'
import { Form } from './Form'

/**
 * Main app
 *
 * @returns
 */
function App() {
  const [widgets, setWidgets] = useState([] as WidgetModel[])

  const fetchWidgets = () => {
    console.log('running fetch widgets')
    getWidgets()
      .then((widgetResponse) => {
        setWidgets(widgetResponse.body)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchWidgets()
  }, [])

  return (
    <div>
      <WidgetList widgets={widgets} fetchWidgets={fetchWidgets} />
      <Form fetchWidgets={fetchWidgets} />
    </div>
  )
}

export default App
