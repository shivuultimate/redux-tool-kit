import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchResourceDetails=createAsyncThunk("fetchResourceDetails",async()=>{
    const response=await fetch("https://engineering-task.elancoapps.com/api/resources");
    return response.json();
});


const ResourceSlice=createSlice({
    name:"resource",
    initialState:{
        isLoadings:false,
        resourcedata:[],
        isError:false,
        resourceDetails:[],
    },
    extraReducers:(builders)=>{
        builders.addCase(fetchResourceDetails.pending,(state,action)=>{
            state.isLoadings=true;
        });
        builders.addCase(fetchResourceDetails.fulfilled,(state,action)=>{
            state.isLoadings=false;
            state.resourcedata=action.payload;
        });
        builders.addCase(fetchResourceDetails.rejected,(state,action)=>{
            state.isLoadings=true;
        });
    }        
});

export default ResourceSlice.reducer;
    

