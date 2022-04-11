import React, { lazy, Suspense } from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import InitForm from './initPage/initPage'
const Page = lazy(() => import('../components/page/page'))

export default function Routes() {
    return (
        <Switch>
            {/* <Redirect exact from="/" to={login} /> */}
            <Route exact path={`/`} >
                <InitForm />
            </Route>
            <Route path={`/page`} >
                <Suspense fallback={<h1>Still Loading…</h1>}>  <Page /></Suspense>
            </Route >
            <Route path="/drinks" render={(props) => (true ? <Suspense fallback={<h1>Still Loading…</h1>}>
                {/* <User {...props} /> */}
            </Suspense> : <Redirect to="/home-page" />)} />
        </Switch>
    )
}
