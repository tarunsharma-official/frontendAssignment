import { useState, useEffect } from "react";
import './App.css';
import Column from './components/Column';
import Navbar from './components/headers/NavBar';
import fetchDataInstance from './services/FetchData';

const priorityLabels = {
  4: "High",
  3: "Medium",
  2: "Low",
  1: "Very Low",
  0: "No Priority",
};

const statusLabels = ["In progress", "Todo", "Backlog", "Done", "Cancelled"];

function App() {
  const [groupBy, setGroupBy] = useState("username");
  const [data, setData] = useState({ tickets: [], users: [] }); // Initialize data state

  useEffect(() => {
    // Fetch data on component mount
    const fetchData = async () => {
      const fetchedData = await fetchDataInstance.fetchData();
      if (fetchedData) {
        setData(fetchedData);
      }
    };
    fetchData();
  }, []);

  const handleGroupChange = (value) => {
    setGroupBy(value);
  };

  const groupTickets = () => {
    const { tickets, users } = data;

    if (groupBy === "status") {
      return statusLabels.map((status) => ({
        key: status,
        label: status,
        tickets: tickets.filter((ticket) => ticket.status === status),
      }));
    }

    if (groupBy === "priority") {
      const sortedTickets = [...tickets].sort((a, b) => {
        // First, sort by priority: 0 comes first, then 4, 3, 2, 1
        if (a.priority === 0) return -1; // Put 0 first
        if (b.priority === 0) return 1;  // Put 0 first
        return b.priority - a.priority;  // Then sort remaining priorities from high to low
      });
      return Object.keys(priorityLabels).map((priority) => ({
        key: priority,
        label: priorityLabels[priority],
        tickets: sortedTickets.filter((ticket) => ticket.priority === parseInt(priority)),
      }));
    }

    // Default: Group by username
    return users.map((user) => ({
      key: user.id,
      label: user.name,
      tickets: tickets.filter((ticket) => ticket.userId === user.id),
    }));
  };

  const renderColumns = () => {
    const groupedTickets = groupTickets();
    return groupedTickets.map((group) => (
      <Column key={group.key} title={group.label} tickets={group.tickets} />
    ));
  };

  return (
    <>
      <Navbar onGroupChange={handleGroupChange} />
      <div className="contents">{renderColumns()}</div>
    </>
  );
}

export default App;
