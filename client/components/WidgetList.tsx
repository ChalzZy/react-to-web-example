import { Widget } from './Widget'
import { Widget as WidgetModel } from '../../models/Widget'

interface WidgetListProps {
  widgets: WidgetModel[]
  fetchWidgets: any
}

export const WidgetList: React.FC<WidgetListProps> = ({
  widgets,
  fetchWidgets,
}) => {
  return (
    <div>
      <h1>Widget List</h1>
      <ul>
        {widgets.map((widget: WidgetModel, index: number) => (
          <li key={index}>
            <Widget {...widget} fetchWidgets={fetchWidgets} />
          </li>
        ))}
      </ul>
    </div>
  )
}
