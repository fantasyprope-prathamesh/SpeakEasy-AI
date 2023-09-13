import {createSlice} from '@reduxjs/toolkit';

const promptSlice = createSlice({
    name : "prompts",
    initialState : [],
    reducers : {
        
        updatePrompts : (state,action)=>{
            state.unshift( action.payload );
        },

        emptyPrompts : (state,action)=>{
            while(state.length){
                state.pop();
            }
        }
    }
})

export const {updatePrompts,emptyPrompts} = promptSlice.actions;
export const updatePromptsReducer = promptSlice.reducer;