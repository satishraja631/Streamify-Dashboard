import { createSlice } from "@reduxjs/toolkit";

interface RecentStream{
    song:string;
    artist:string;
    date:string;
    streams:number;
    userId:string;
}

const initialState: RecentStream[] = [
    { song: "One Dance", artist: "Drake", date: "2025-02-01", streams: 100, userId: "U123" },
    { song: "As It Was", artist: "Harry Styles", date: "2025-01-31", streams: 120, userId: "U456" },
    { song: "Shape of You", artist: "Ed Sheeran", date: "2025-01-30", streams: 150, userId: "U789" },
    { song: "Blinding Lights", artist: "The Weeknd", date: "2025-01-29", streams: 200, userId: "U101" },
    { song: "Levitating", artist: "Dua Lipa", date: "2025-01-28", streams: 175, userId: "U102" },
    { song: "Stay", artist: "The Kid LAROI & Justin Bieber", date: "2025-01-27", streams: 220, userId: "U103" },
    { song: "Bad Habits", artist: "Ed Sheeran", date: "2025-01-26", streams: 190, userId: "U104" },
    { song: "Industry Baby", artist: "Lil Nas X & Jack Harlow", date: "2025-01-25", streams: 160, userId: "U105" },
  
  ];

const recentStreamSlice=createSlice({
    name:'recentSteamSlice',
    initialState,
    reducers:{}
})

export default recentStreamSlice.reducer