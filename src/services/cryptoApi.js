// import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
// import axios from 'axios'
// const URL = 'https://coinranking1.p.rapidapi.com/coins'
// export const cryptoData =  createAsyncThunk('crypto/getData', async (arg,{rejectWithValue}) => {
//     try {
//         console.log('from  crypto')
//         const {data:{data}} = await axios.get(URL,{

//           headers: {
//             'X-RapidAPI-Key': '64ddb857bbmsh12f962703900d05p1af711jsn6faa1805a1d1',
//             'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//           }
//         });
        
//      console.log(data,'from  crypto')
//         return data;
//     } catch (error) {
//         rejectWithValue(error.response.data);
//         console.log(error);
        
//     }
// })

// const cryptoSlice = createSlice({
    
//     name: 'crypto',
//     initialState:{
//         data:[],
//         isSuccess:false,
//         message:"",
//         loading:false,
//     },     
//     reducers:{},
//     extraReducers:{
       
//         [cryptoData.pending]:(state,{payload})=>{
//             state.loading=true;
//         },
//         [cryptoData.fulfilled]:(state,{payload})=>{
//             state.loading=false;
//             state.data=payload;
//             state.isSuccess=true;
//         },
//         [cryptoData.rejected]:(state,{payload})=>{
//             state.message=payload;
//             state.loading=false;
//             state.isSuccess=false;
//         },
        
//     },
//  }
 
//  );

//  export default cryptoSlice;

import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders  ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key':  '64ddb857bbmsh12f962703900d05p1af711jsn6faa1805a1d1',
             
}
const baseUrl ='https://coinranking1.p.rapidapi.com' ;
const createRequest = (url )=>({url,headers:cryptoApiHeaders })

export const cryptoApi = createApi ({
    
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            
            query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query({
            
        query: (coinId) => createRequest(`/coin/${coinId}`)
}),
getCryptoHistory: builder.query({
            
    query: ({coinId,timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
})
    
})
    
})
export const{
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery
}=cryptoApi;