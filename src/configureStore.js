import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import createLogger from 'redux-logger'

import dndApp from './reducers'

const freshStore = () => {
    const middlewares = [ promise ]
    middlewares.push( createLogger() )

    return createStore(
        dndApp,
        applyMiddleware( ...middlewares )
    )
}

export { freshStore }
