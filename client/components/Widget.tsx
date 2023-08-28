import { useState } from 'react'
import { NewWidget } from '../../models/Widget'
import { deleteWidget, updateWidget } from '../apiClient'
import { UpdateForm } from './UpdateForm'

export const Widget: React.FC<NewWidget> = ({ fetchWidgets, ...widget }) => {
  const [form, setForm] = useState(false)

  const closeForm = () => {
    setForm(!form)
    fetchWidgets()
  }

  const handleDelete = async (e: any) => {
    await deleteWidget(widget.id)
    console.log('Attempting to fetch widgets inside Widget.tsx')
    fetchWidgets()
  }

  return (
    <div>
      <h2>{widget.name}</h2>
      <p>Price: ${widget.price}</p>
      <p>Manufacturer: {widget.mfg}</p>
      <p>In Stock: {widget.inStock}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      <button type="button" onClick={() => setForm(!form)}>
        Edit
      </button>
      {form && <UpdateForm {...widget} closeForm={closeForm} />}
    </div>
  )
}
