#  Streamify Analytics Dashboard  

A **React + TypeScript** dashboard for the fictional **Streamify** music streaming service. The dashboard provides **real-time insights** into user activity, revenue, and top-performing content using interactive charts and data tables.  

---

##  Thought Process  

###  **1. Project Goals & Requirements**  
- The goal is to create an **analytics dashboard** that provides key insights into a music streaming service.  
- The UI should be **clean, modern, and highly interactive**.  
- The system should be **responsive and scalable**, allowing future enhancements like real-time data updates.  
- **Performance matters** → Optimizing re-renders, lazy loading, and efficient state management.  

###  **2. Tech Stack Selection**  
- **React + TypeScript** → Ensures type safety and scalability.  
- **Vite** → Faster builds and optimized performance over CRA.  
- **Redux Toolkit** → Centralized state management for structured data flow.  
- **Tailwind CSS** → Rapid UI development with a modern design.  
- **Recharts (or Chart.js)** → Easy-to-use, responsive data visualizations.  

###  **3. State Management Considerations**  
- Used **Redux Toolkit** to store and manage metrics, charts, and stream data.  
- **Reducers are categorized**:  
  - `metricsSlice.tsx` → Stores key performance indicators.  
  - `dataVisualizationSlice.ts` → Stores user growth data.Manages top streamed songs. Stores Revenue data.  
  - `recentStreamsSlice.ts` → Stores a list of recent streams for the data table.  


###  **4. Performance Optimizations**   
- **Code splitting** to reduce initial bundle size.  

###  **5. UI & UX Design**  
- Followed a **minimalist, modern design** 
- Dashboard uses a **card-based layout** for better readability.  
- **Charts & tables** are interactive for a better analytical experience.  


---

##  Features  

✅ **Key Metrics Dashboard** → Total Users, Active Users, Total Streams, Revenue, and Top Artist.  
✅ **Data Visualizations** → Line chart (User Growth), Pie chart (Revenue Breakdown), Bar chart (Top 5 Streamed Songs).  
✅ **Recent Streams Table** → Sortable and filterable data table for detailed stream records.  
✅ **Interactive UI** → Hover & click interactions for charts, filters for data views.  
✅ **State Management with Redux Toolkit** → Ensures efficient data handling.  
✅ **Responsive & Product-Ready UI** → Built with Tailwind CSS for modern design.  

---

##  **Tech Stack**  

- **Frontend**: React (Vite) + TypeScript  
- **State Management**: Redux Toolkit  
- **Styling**: Tailwind CSS  
- **Charts**: Recharts / Chart.js  


---

##  **Getting Started**  

###  **Clone the Repository**  
```sh
git clone https://github.com/yourusername/streamify-dashboard.git
cd streamify-dashboard


### Install Dependencies

npm install


### Set up Tailwind CSS

## Ensure Tailwind is properly installed. If needed ,run

npm install tailwindcss @tailwindcss/vite

### Start the Development Server

npm run dev


## Folder Structure

streamify-dashboard/
│── src/
│   ├── components/         # Reusable UI Components  
│   ├── pages/              # Page-level components  
│   ├── redux/              # Redux store & slices  
│   │   ├── slices/         # Individual state slices  
│   │   ├── store.ts        # Redux store setup  
│   ├── assets/             # Icons & images  
│   ├── App.tsx             # Main App component  
│   ├── main.tsx            # React entry point  
│── public/                 # Static assets  
│── package.json            # Dependencies & scripts  
│── tailwind.config.js      # Tailwind config  
│── vite.config.ts          # Vite config  
│── tsconfig.json           # TypeScript config  
│── README.md               # This file  


### Testing

## Install dependencies

npm i --save-dev @types/redux-mock-store jest react-testing-library

## Run tests with
npm run test

