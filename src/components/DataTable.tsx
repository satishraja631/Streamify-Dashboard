import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface RecentStream {
  song: string;
  artist: string;
  date: string;
  streams: number;
  userId: string;
}

const DataTable = () => {
  const recentStreams = useSelector(
    (state: RootState) => state.recentStreams
  );

  const [searchSong, setSearchSong] = useState("");
  const [searchArtist, setSearchArtist] = useState("");
  const [sortField, setSortField] = useState<"date" | "streams" | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Filtered data based on user input
  const filteredData = recentStreams.filter(
    (stream) =>
      stream.song.toLowerCase().includes(searchSong.toLowerCase()) &&
      stream.artist.toLowerCase().includes(searchArtist.toLowerCase())
  );

  // Sorting function
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    if (sortField === "date") {
      return sortOrder === "asc"
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortField === "streams") {
      return sortOrder === "asc" ? a.streams - b.streams : b.streams - a.streams;
    }
    return 0;
  });

  // Handle sorting
  const handleSort = (field: "date" | "streams") => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-[#111827] mb-4">Recent Streams</h2>

      {/* Filters */}
      <div className="flex  gap-4 mb-4">
        <input
          type="text"
          placeholder="Filter by Song Name"
          className="p-2 border rounded-lg w-full sm:w-1/2"
          value={searchSong}
          onChange={(e) => setSearchSong(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Artist"
          className="p-2 border rounded-lg w-full sm:w-1/2"
          value={searchArtist}
          onChange={(e) => setSearchArtist(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="w-full border-collapse ">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border-b text-center w-[20%] ">Song Name</th>
              <th className="p-3 border-b text-center w-[20%]">Artist</th>
              <th
                className="p-3 border-b text-center w-[20%] cursor-pointer"
                onClick={() => handleSort("date")}
              >
                Date Streamed {sortField === "date" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th
                className="p-3 border-b text-center w-[20%] cursor-pointer"
                onClick={() => handleSort("streams")}
              >
                Stream Count {sortField === "streams" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th className="p-3 border-b text-center w-[20%]">User ID</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((stream, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{stream.song}</td>
                <td className="p-3">{stream.artist}</td>
                <td className="p-3">{stream.date}</td>
                <td className="p-3">{stream.streams}</td>
                <td className="p-3">{stream.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
