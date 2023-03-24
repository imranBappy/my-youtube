import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9000',

    }),
    tagTypes: ['Videos', 'Video'],
    endpoints: (builder) => {
        return ({
            getVideos: builder.query({
                query: () => '/videos',
                providesTags: ['Videos'],
                // keepUnusedDataFor: 60 * 10,
            }),
            getVideo: builder.query({
                query: (id) => `/videos/${id}`,
                providesTags: (result, error, id) => [{
                    type: 'Video',
                    id: id
                }]
            }),
            getRelatedVideos: builder.query({
                query: ({ id, title }) => {
                    const search = title.split(' ')
                        .map(word => `title_like=${word}`)
                        .join('&') + '&limit=4';
                    console.log(`/videos?${search}`);
                    return `/videos?${search}`;
                }
            }),
            addVideo: builder.mutation({
                query: (body) => ({
                    url: '/videos',
                    method: 'POST',
                    body
                }),
                invalidatesTags: ['Videos']
            }),
            editVideo: builder.mutation({
                query: ({ id, data }) => ({
                    url: '/videos/' + id,
                    method: 'PUT',
                    body: data
                }),
                invalidatesTags: (result, error, args) => ['Videos', {
                    type: 'Video',
                    id: args.id
                }]
            })
        });
    }
});



export const {
    useGetVideosQuery,
    useGetVideoQuery,
    useGetRelatedVideosQuery,
    useAddVideoMutation,
    useEditVideoMutation
} = apiSlice