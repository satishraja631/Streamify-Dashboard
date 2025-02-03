
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataVisualizationState {
  userGrowth: { months: string[]; totalUsers: number[]; activeUsers: number[] };
  revenueDistribution: { label: string; value: number }[];
  topSongs: { song: string; streams: number }[];
}

const initialState: DataVisualizationState = {
  userGrowth: {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    totalUsers: [50000, 52000, 53000, 54000, 56000, 57000, 59000, 60000, 61000, 62000, 63000, 64000],
    activeUsers: [20000, 21000, 22000, 23000, 25000, 26000, 27000, 28000, 29000, 30000, 31000, 32000],
  },
  revenueDistribution: [
    { label: "Subscriptions", value: 70000 },
    { label: "Ads", value: 30000 },
  ],
  topSongs: [
    
    {song:"One Dance",streams:15000},
    {song:"Sunflower",streams:14000},
    {song:"Sweater Weather",streams:13000},
    {song:"Stay",streams:12000},
    {song:"Believer",streams:11000},
  ],
};

const dataVisualizationSlice = createSlice({
  name: "dataVisualization",
  initialState,
  reducers: {
    setUserGrowthData(state, action: PayloadAction<DataVisualizationState["userGrowth"]>) {
      state.userGrowth = action.payload;
    },
    setRevenueDistribution(state, action: PayloadAction<DataVisualizationState["revenueDistribution"]>) {
      state.revenueDistribution = action.payload;
    },
    setTopSongs(state, action: PayloadAction<DataVisualizationState["topSongs"]>) {
      state.topSongs = action.payload;
    },
  },
});

export const { setUserGrowthData, setRevenueDistribution, setTopSongs } = dataVisualizationSlice.actions;
export default dataVisualizationSlice.reducer;
