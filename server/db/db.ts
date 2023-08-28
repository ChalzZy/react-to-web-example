import connection from './connection.ts'
import { Widget } from '../../models/Widget.ts'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function addWidget(data: any) {
  console.log(data)
  return connection('widgets')
    .insert(data)
}

export function deleteWidget(id: number) {
    // Delete widget from the database
    console.log(id)
    return connection('widgets').where({ id: id }).del()
}

export function patchWidget(id: number, data: any) {
  console.log('patching data: ' + data.body)
  return connection('widgets').where({ id: id }).update(data.body)
}
