import { configureStore } from "@reduxjs/toolkit";
import metricsReducer from './slices/metricSlice'

import recentStreamReducer from './slices/recentStreamsSlice'
import dataVisualizationReducer from './slices/dataVisualizationSlice'


export const store=configureStore({
    reducer:{
        metrics:metricsReducer,
        
        recentStreams:recentStreamReducer,
        dataVisualization: dataVisualizationReducer,

    }
})

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch =typeof store.dispatch

export default store