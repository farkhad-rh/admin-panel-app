import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MERCHANT_URL } from '@constants'

export const merchantAPI = createApi({
  reducerPath: 'merchantAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: MERCHANT_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  tagTypes: ['Merchants'],
  endpoints: builder => ({
    getMerchants: builder.query({
      query: () => ({
        url: '/',
        params: {
          page: 1,
          limit: 100,
        },
      }),
      providesTags: ['Merchants'],
    }),
    getMerchant: builder.query({
      query: id => `${id}`,
    }),
    createMerchant: builder.mutation({
      query: merchant => ({
        url: '/',
        method: 'POST',
        body: merchant,
      }),
      invalidatesTags: ['Merchants'],
    }),
    updateMerchant: builder.mutation({
      query: (id, merchant) => ({
        url: `${id}`,
        method: 'PUT',
        body: merchant,
      }),
      invalidatesTags: ['Merchants'],
    }),
    deleteMerchant: builder.mutation({
      query: (id, merchant) => ({
        url: `${id}`,
        method: 'DELETE',
        body: merchant,
      }),
      invalidatesTags: ['Merchants'],
    }),
  }),
})

export const { getMerchants, getMerchant, createMerchant, updateMerchant, deleteMerchant } =
  merchantAPI.endpoints

export const {
  useGetMerchantsQuery,
  useGetMerchantQuery,
  useCreateMerchantMutation,
  useUpdateMerchantMutation,
  useDeleteMerchantMutation,
} = merchantAPI
