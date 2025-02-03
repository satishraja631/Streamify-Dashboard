
import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "../components/Dashboard"; 
import '@testing-library/jest-dom';


// Mock child components to prevent unnecessary rendering issues
jest.mock("../components/KeyMetrics", () => () => <div data-testid="key-metrics">Key Metrics</div>);
jest.mock("../components/DataVisualization", () => () => <div data-testid="data-visualization">Data Visualization</div>);
jest.mock("../components/DataTable", () => () => <div data-testid="data-table">Data Table</div>);

describe("Dashboard Component", () => {
  test("renders the dashboard with default Key Metrics section", () => {
    render(<Dashboard />);
    
    // Check for the sidebar title
    expect(screen.getAllByText("Streamify")[0]).toBeInTheDocument();
  
    
    // Check if "Key Metrics" section is rendered by default
    expect(screen.getByTestId("key-metrics")).toBeInTheDocument();
  });

  

  test("switches to Data Visualization section when clicked", () => {
    render(<Dashboard />);
    
    // Click on "Data Visualization" in the sidebar
    fireEvent.click(screen.getByText("Data Visualization"));

    // Expect Data Visualization section to be visible
    expect(screen.getByTestId("data-visualization")).toBeInTheDocument();
  });

  test("switches to Data Table section when clicked", () => {
    render(<Dashboard />);
    
    // Click on "Data Table" in the sidebar
    fireEvent.click(screen.getByText("Data Table"));

    // Expect Data Table section to be visible
    expect(screen.getByTestId("data-table")).toBeInTheDocument();
  });
});
