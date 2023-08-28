import React, { useState } from 'react'
import { addWidget } from '../apiClient'

interface FormProps {
  fetchWidgets: any
}

export const Form = ({ fetchWidgets }: FormProps) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0.0)
  const [manufacturer, setManufacturer] = useState('')
  const [inStock, setInStock] = useState(0.0)
  const [rating, setRating] = useState('0')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const data = {
      name: name,
      price: price,
      mfg: manufacturer,
      inStock: inStock,
    }
    await addWidget(data)
    fetchWidgets()
    handleCancel()
  }

  const handleCancel = () => {
    setName('')
    setPrice(0.0)
    setManufacturer('')
    setInStock(0.0)
  }

  return (
    <div>
      <h1>Add Products</h1>
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
