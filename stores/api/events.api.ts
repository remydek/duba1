// // TODO: Implement API Slices when we have use client we need to obsecure the routes
// import type { Event } from "@/schemas/event";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const userApi = createApi({
//     reducerPath: 'userApi',
//     baseQuery: fetchBaseQuery({ baseUrl: '/api/users' }),
//     tagTypes: ['Events'],
//     endpoints: (builder) => ({
//         getEvents: builder.query<Event[], void>({
//             query: () => '/',
//             providesTags: (result) =>
//                 result
//                     ? result.map((r: Event) => ({ type: 'Events', id: r.id }))
//                     : ['Events'],
//         }),
//         getEvent: builder.query<Event, string>({
//             query: (id) => `/${id}`,
//             providesTags: (result, error, id) => [{ type: 'Events' as const, id }],
//         }),
//         // createEvent: builder.mutation<Event, CreateEventInput>({
//         //     query: (body) => ({
//         //         url: '/',
//         //         method: 'POST',
//         //         body
//         //     }),
//         //     invalidatesTags: ['Events'],
//         // }),
//         // updateEvent: builder.mutation<Event, { id: string, body: UpdateEventInput }>({
//         //     query: ({ id, body }) => ({
//         //         url: `/${id}`,
//         //         method: 'PUT',
//         //         body
//         //     }),
//         //     invalidatesTags: (result, error, args) => [{ type: 'Events', id: args.id }],
//         // }),
//         deleteEvent: builder.mutation<Event, string>({
//             query: (id) => ({
//                 url: `/${id}`,
//                 method: 'DELETE',
//             }),
//             invalidatesTags: (result, error, id) => [{ type: 'Events', id: id }],
//         })
//     })
// })


// export const {
//     useGetEventsQuery,
//     useGetEventQuery,
//     useCreateEventMutation,
//     useUpdateEventMutation,
//     useDeleteEventMutation
// } = userApi
