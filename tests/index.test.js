import React from 'react'
import { screen } from '@testing-library/react'
// We're using our own custom render function and not RTL's render.
import renderWithProviders from '@utils/test-utils'
import Home from '@pages/index'
import { fetchUsers } from '@my-redux/usersSlice'
import { setupStore } from '@my-redux/store'
const store = setupStore()


test('fetches & receives a users', async () => { 
  store.dispatch(fetchUsers())
  renderWithProviders(<Home />, { store })

  // expect(screen.getByText(/id/i)).toBeInTheDocument()
})