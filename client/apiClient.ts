/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export async function getWidgets(): Promise<any> {
    try {
        const response = request.get(widgetUrl);
        return response; 
    } catch (error) {
        console.error('An error occurred', error);
        throw error; 
    }
}

export async function addWidget(data: any): Promise<any> {
    console.log('trying to add widget', data)
    request
        .post(widgetUrl + 'add')
        .send(data)
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Response:', response.body);
                return response;
            }
     })
 }

 export async function deleteWidget(data: any): Promise<any> {
    console.log('trying to delete widget', data)
    request
        .delete(widgetUrl + data)
        .end((error, response) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Response:', response.body);
                return response;
            }
    })
 }

 export async function updateWidget(id: number, data: any): Promise<any> {
    console.log('trying to update widget', id)
    request
        .patch(widgetUrl + id)
        .send(data)
        .set('Content-Type', 'application/json')
        .end((error, response) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Response:', response.body);
                return response;
            }
    })
 }
            
