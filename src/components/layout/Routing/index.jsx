import { BrowserRouter as Router, Navigate, Routes, Route, Outlet } from 'react-router-dom'

import propTypes from 'prop-types'

import { ScrollToTop } from '@utils'
import {
  LOGIN_ROUTE,
  USER_ROUTE,
  CATALOG_ROUTE,
  FEATURE_ROUTE,
  PRODUCT_ROUTE,
  ARCHIVE_ROUTE,
  MERCHANT_ROUTE,
  PRICING_ROUTE,
  STORE_ROUTE,
  ORDER_ROUTE,
} from '@constants'
import { useAuth } from '@hooks'

import { Area } from '@layout'
import { OrderList, OrderDetail } from '@order'
import { Login, Catalog, Order } from '@views'

const ProtectedRoute = ({ redirectPath = LOGIN_ROUTE, children }) => {
  const { auth } = useAuth()

  if (!auth) {
    return (
      <Navigate
        to={redirectPath}
        replace
      />
    )
  }

  return children ? children : <Outlet />
}

ProtectedRoute.propTypes = {
  redirectPath: propTypes.string,
  children: propTypes.node,
}

const Routing = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route
            path={LOGIN_ROUTE}
            element={<Login />}
          />

          <Route element={<ProtectedRoute />}>
            <Route
              path={USER_ROUTE}
              element={<Area />}
            >
              <Route
                index
                element={
                  <Navigate
                    to={ORDER_ROUTE}
                    replace
                  />
                }
              />
              <Route
                path={CATALOG_ROUTE}
                element={<Catalog />}
              />
              <Route
                path={FEATURE_ROUTE}
                element={<p>FEATURE_ROUTE</p>}
              />
              <Route
                path={PRODUCT_ROUTE}
                element={<p>PRODUCT_ROUTE</p>}
              />
              <Route
                path={ARCHIVE_ROUTE}
                element={<p>ARCHIVE_ROUTE</p>}
              />
              <Route
                path={PRICING_ROUTE}
                element={<p>PRICING_ROUTE</p>}
              />
              <Route
                path={MERCHANT_ROUTE}
                element={<p>MERCHANT_ROUTE</p>}
              />
              <Route
                path={STORE_ROUTE}
                element={<p>STORE_ROUTE</p>}
              />
              <Route
                path={ORDER_ROUTE}
                element={<Order />}
              >
                <Route
                  index
                  element={<OrderList />}
                />
                <Route
                  path=':userId'
                  element={
                    <Navigate
                      to='/'
                      replace
                    />
                  }
                />
                <Route
                  path=':userId/:orderId'
                  element={<OrderDetail />}
                />
              </Route>
              <Route
                path='*'
                element={<p>NOT_FOUND_USERS</p>}
              />
            </Route>
          </Route>

          <Route
            path='*'
            element={
              <Navigate
                to={`${USER_ROUTE}/${ORDER_ROUTE}`}
                replace
              />
            }
          />
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default Routing
