import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import userEvent from  '@testing-library/user-event'
import { getEpisodes as mockFetchEpisodes } from '../api/episodesService'

import Episodes from '../components/Episodes'
import App from '../App'
import { data } from '../mockData'
import { act } from 'react-dom/test-utils'


jest.mock('../api/episodesService.js')

test('renders the app ', () => {
    act(() => {

        mockFetchEpisodes.mockResolvedValueOnce(data)
        
    })
    render(<App />)
})

test('correct episodes populate when you select a season', async () => {
 

    act(() => {
        mockFetchEpisodes.mockResolvedValueOnce(data)



    })
    const {getByTestId, getByText} = render(<App />)
    await wait( () => {getByText(/Select a season/i)} )
    const dropDown = getByText(/Select a season/i)
    userEvent.click(dropDown)
   // fireEvent.change(dropDown, {value: "Season 1"})
    const text = getByText(/Season 1/i)
    expect(text).toBeInTheDocument()

})

