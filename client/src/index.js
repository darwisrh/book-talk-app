import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import WithChakra from './chakra.config'

const client = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>

      <Router>
        <QueryClientProvider client={client}>
          <WithChakra />
        </QueryClientProvider>
      </Router>

  </React.StrictMode>
)