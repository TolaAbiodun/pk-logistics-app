import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// API SLICE
export const deliveryAPI = createApi({
  reducerPath: "deliveryAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://60e84194673e350017c21844.mockapi.io/api/",
  }),
  endpoints: (builder) => ({
    getAllDeliveries: builder.query({
      query: () => ({
        url: "deliveries",
        method: "GET",
      }),
    }),
    getDeliveryById: builder.query({
      query: (id) => {
        return {
          url: `deliveries/${id}`,
          method: "GET",
        };
      },
    }),
    createDeliveryPost: builder.mutation({
        query: (newDelivery) => {
            return {
                url: "finishDelivery",
                method: 'POST',
                body: newDelivery,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }
        }
    }),
  }),
});

// Get all Deliveries Hook
export const { useGetAllDeliveriesQuery, useGetDeliveryByIdQuery, useCreateDeliveryPostMutation } = deliveryAPI;
