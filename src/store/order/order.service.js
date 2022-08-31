import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ORDER_URL } from '@constants'

export const orderAPI = createApi({
  reducerPath: 'orderAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: ORDER_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  refetchOnMountOrArgChange: true,
  tagTypes: ['Orders', 'SERVER_ERROR'],
  endpoints: builder => ({
    getOrders: builder.query({
      query: () => ({
        url: '/',
        params: {
          page: 1,
          limit: 100,
        },
      }),
      providesTags: ['Orders'],
    }),
    getOrder: builder.query({
      query: params => ({
        url: 'info',
        params: params,
      }),
    }),
    handleOrder: builder.mutation({
      query: order => ({
        url: 'handle',
        method: 'POST',
        body: order,
      }),
      invalidatesTags: ['Orders'],
    }),
    declineOrder: builder.mutation({
      query: reason => ({
        url: 'decline',
        method: 'POST',
        body: reason,
      }),
      invalidatesTags: ['Orders'],
    }),
  }),
})

export const { getOrders, getOrder, handleOrder, declineOrder } = orderAPI.endpoints

export const {
  useGetOrdersQuery,
  useGetOrderQuery,
  useHandleOrderMutation,
  useDeclineOrderMutation,
} = orderAPI
