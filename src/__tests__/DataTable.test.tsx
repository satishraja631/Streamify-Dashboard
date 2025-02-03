import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import DataTable from "../components/DataTable"; 

const mockStore = configureStore([]);

const mockRecentStreams = [
  { song: "Shape of You", artist: "Ed Sheeran", date: "2024-02-01", streams: 500, userId: "user1" },
  { song: "Blinding Lights", artist: "The Weeknd", date: "2024-01-15", streams: 700, userId: "user2" },
  { song: "Rolling in the Deep", artist: "Adele", date: "2024-01-10", streams: 300, userId: "user3" }
];

describe("DataTable Component", () => {
  test("renders table with correct headers", () => {
    const store = mockStore({ recentStreams: mockRecentStreams });

    render(
      <Provider store={store}>
        <DataTable />
      </Provider>
    );

    // Verify Table Headers
    const headers = ["Song Name", "Artist", "Date Streamed", "Stream Count", "User ID"];
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  test("filters table based on both song name and artist search inputs", () => {
    const store = mockStore({ recentStreams: mockRecentStreams });

    render(
      <Provider store={store}>
        <DataTable />
      </Provider>
    );

    // Get both search inputs
    const songSearchInput = screen.getByPlaceholderText("Filter by Song Name");
    const artistSearchInput = screen.getByPlaceholderText("Filter by Artist");

    // Initially, all songs should be in the document
    expect(screen.getByText("Shape of You")).toBeInTheDocument();
    expect(screen.getByText("Blinding Lights")).toBeInTheDocument();
    expect(screen.getByText("Rolling in the Deep")).toBeInTheDocument();

    //  Filter by Song Name (e.g., "Shape of You")
    fireEvent.change(songSearchInput, { target: { value: "Shape" } });

    // Only "Shape of You" should be present, others should not
    expect(screen.getByText("Shape of You")).toBeInTheDocument();
    expect(screen.queryByText("Blinding Lights")).not.toBeInTheDocument();
    expect(screen.queryByText("Rolling in the Deep")).not.toBeInTheDocument();

    //  Filter by Artist (e.g., "The Weeknd")
    fireEvent.change(songSearchInput, { target: { value: "" } }); // Clear song filter
    fireEvent.change(artistSearchInput, { target: { value: "Weeknd" } });

    // Only "Blinding Lights" by The Weeknd should be present
    expect(screen.getByText("Blinding Lights")).toBeInTheDocument();
    expect(screen.queryByText("Shape of You")).not.toBeInTheDocument();
    expect(screen.queryByText("Rolling in the Deep")).not.toBeInTheDocument();
  });
});
