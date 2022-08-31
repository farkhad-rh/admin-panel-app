import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AUTH_URL } from '@constants'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: AUTH_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    otpPhone: builder.mutation({
      query: phone => ({
        url: 'otp/phone',
        method: 'POST',
        body: phone,
      }),
      invalidatesTags: ['User'],
    }),
    login: builder.mutation({
      query: credentials => ({
        url: 'login-otp',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
    refresh: builder.mutation({
      query: () => ({
        url: 'refresh-token',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const { otpPhone, login, logout, refresh } = authAPI.endpoints

export const { useOtpPhoneMutation, useLoginMutation, useLogoutMutation, useRefreshMutation } =
  authAPI
