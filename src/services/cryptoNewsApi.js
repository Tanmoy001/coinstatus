
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoNewsApiHeaders  ={
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '64ddb857bbmsh12f962703900d05p1af711jsn6faa1805a1d1'
             
}
const baseUrl ='https://bing-news-search1.p.rapidapi.com' ;
const createRequest = (url )=>({url,headers:cryptoNewsApiHeaders })

export const cryptoNewsApi = createApi ({
    
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
})
    
})
export const{
    useGetCryptoNewsQuery,
}=cryptoNewsApi;