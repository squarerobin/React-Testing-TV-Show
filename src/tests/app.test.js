import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'

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

test('correct episodes populate when you select a season', async ()=>{
 

    act(()=>{
        mockFetchEpisodes


    })
    const {getByTestId} = render(<App />)
    const dropDown = getByTestId('dropDown')
    fireEvent.change(dropDown, {value: "Season 1"})
    const text = getByText(/Season 1/i)
    expect(text).toBeInTheDocument()

})

