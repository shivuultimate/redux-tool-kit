import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUserDetails=createAsyncThunk("fetchUserDetails",async()=>{
    const response=await fetch("https://engineering-task.elancoapps.com/api/applications");
    return response.json();
});

export const fetchUserDetail=createAsyncThunk("fetchUserDetail",async()=>{
    const response=await fetch("https://engineering-task.elancoapps.com/api/applications/Macao");
    return response.json();
});


const userSlice=createSlice({
    name:"users",
    initialState:{
        isLoading:false,
        data:[],
        isError:false,
        userDetails:[],
    },
    extraReducers:(builders)=>{
        builders.addCase(fetchUserDetails.pending,(state,action)=>{
            state.isLoading=true;
        });
        builders.addCase(fetchUserDetails.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        });
        builders.addCase(fetchUserDetails.rejected,(state,action)=>{
            state.isLoading=true;
        });
        builders.addCase(fetchUserDetail.pending,(state,action)=>{
            state.isLoading=true;
        });
        builders.addCase(fetchUserDetail.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.userDetails=action.payload;
        });
        builders.addCase(fetchUserDetail.rejected,(state,action)=>{
            state.isLoading=true;
        });
    }        
});




// const userSliceData=createSlice({
//     name:"usersData",
//     initialState:{
//         isLoading:false,
//         data:[],
//         isError:false,
//         userDetailsData:[],
//     },
//     extraReducers:(builders)=>{
//         builders.addCase(fetchUserDetailsData.pending,(state,action)=>{
//             state.isLoading=true;
//         });
//         builders.addCase(fetchUserDetailsData.fulfilled,(state,action)=>{
//             state.isLoading=false;
//             state.data=action.payload;
//         });
//         builders.addCase(fetchUserDetailsData.rejected,(state,action)=>{
//             state.isLoading=true;
//         });
//     }        
// });

export default userSlice.reducer;
    

