import { createSlice } from "@reduxjs/toolkit";
import { FaUsers, FaPlayCircle, FaDollarSign, FaStar } from "react-icons/fa";

interface Revenue {
  subscriptions: number;
  ads: number;
}

interface Metric {
  title: string;
  value: string;
  icon: JSX.Element;
  bg: string;
  description: string;
}

interface MetricState {
  metrics: Metric[];
}

const initialState: MetricState = {
  metrics: [
    {
      title: "Total Users",
      value: "120K",
      icon: <FaUsers />,
      bg: "#4F46E5",
      description: "Total number of users who have registered on the platform. A key indicator of platform growth.",
    },
    {
      title: "Active Users",
      value: "80K",
      icon: <FaUsers />,
      bg: "#10B981",
      description: "The number of users who have streamed at least one song in the last 30 days. Reflects user engagement.",
    },
    {
      title: "Total Streams",
      value: "2.5M",
      icon: <FaPlayCircle />,
      bg: "#F59E0B",
      description: "Total streams across all songs on the platform. Indicates the overall activity and content popularity.",
    },
    {
      title: "Revenue",
      value: "$1.2M",
      icon: <FaDollarSign />,
      bg: "#22C55E",
      description: "Total revenue generated from subscriptions and ads. A key metric for the platform's financial health.",
    },
    {
      title: "Top Artist",
      value: "Drake",
      icon: <FaStar />,
      bg: "#EF4444",
      description: "The artist with the highest number of streams in the past 30 days. Reflects content popularity.",
    },
    {
      title: "New Sign-ups",
      value: "5K",
      icon: <FaUsers />,
      bg: "#4F46E5",
      description: "The number of new users who joined the platform this month. A key metric for user acquisition.",
    },
  ],
};

const metricSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {},
});

export default metricSlice.reducer;
