import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'

import { Routing } from '@layout'

import '@styles/main.scss'

const RootElement = document.getElementById('root')

const RootContainer = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <Routing />
        </PersistGate>
      </Provider>
    </StrictMode>
  )
}

const root = createRoot(RootElement)

root.render(<RootContainer />)
