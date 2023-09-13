import { configureStore } from '@reduxjs/toolkit';
import { updatePromptsReducer } from './slices/promptSlice';
import { updateResultReducer } from './slices/resultSlice';

const store = configureStore({
    reducer: {
        prompts: updatePromptsReducer,
        result: updateResultReducer,
    },
});

export default store;