import { useState } from 'react'
import { updateWidget } from '../apiClient'
import { Widget } from '../../models/Widget'

interface FormProps {
  closeForm: any
  widget: Widget
}

export const UpdateForm = ({ closeForm, ...widget }: FormProps) => {
  const [name, setName] = useState(widget.name)
  const [price, setPrice] = useState(widget.price)
  const [manufacturer, setManufacturer] = useState(widget.mfg)
  const [inStock, setInStock] = useState(widget.inStock)
  const [rating, setRating] = useState('0')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const data = {
      name: name,
      price: price,
      mfg: manufacturer,
      inStock: inStock,
    }
    await updateWidget(widget.id, data)
    handleCancel()
    closeForm()
  }

  const handleCancel = () => {
    // Reset form fields or navigate away from the form
    setName('')
    setPrice(0.0)
    setManufacturer('')
    setInStock(0.0)
  }

  return (
    <div>
      <h1>Update Details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          step="0.01"
          required
        />
        <br />
        <br />

        <label htmlFor="manufacturer">Manufacturer:</label>
        <input
          type="text"
          id="manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="inStock">In Stock:</label>
        <input
          type="text"
          id="inStock"
          value={inStock}
          onChange={(e) => setInStock(parseFloat(e.target.value))}
          required
        />
        <br />
        <br />
        {/* 
        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select> */}
        <br />
        <br />

        <input type="submit" value="Submit" />
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  )
}
