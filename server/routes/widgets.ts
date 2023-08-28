import express from 'express'
import { getWidgets, addWidget, deleteWidget, patchWidget } from '../db/db.ts'

const router = express.Router()

router.get('/', (req, res) => {
  getWidgets()
    .then((widgets) => {
      res.status(200).json(widgets)
    })
    .catch((error) => {
      res.status(500).send(error.message)
    })
})

router.post('/add', (req, res) => {
  console.log('HIT API:', req.body)
  addWidget(req.body)
    .then(() => { 
      res.status(200).json({ message: 'Widget added successfully'})
    })
    .catch((error: { message: any }) => {
      res.status(500).send(error.message)
    })
})

router.delete('/:id', (req, res) => {
  deleteWidget(parseInt(req.params.id))
    .then(() => { 
      res.status(200).json({ message: 'Widget deleted successfully'})
    })
    .catch((error: { message: any }) => {
      res.status(500).send(error.message)
    })
})

router.patch('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  console.log(req.body)
  patchWidget(id, req)
    .then(() => {
      res.status(200).json({ message: id + ' patched successfully'})
    })
    .catch((error: {message: any}) => {
      res.status(500).send(error.message)
    })
})

export default router
