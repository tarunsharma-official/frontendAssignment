import './App.css';
import Column from './components/Column';
import Navbar from './components/headers/NavBar';
import { useState } from 'react';

const data = {
  tickets: [
    { id: "CAM-1", title: "Update User Profile Page UI", tag: ["Feature request"], userId: "usr-1", status: "Todo", priority: 4 },
    { id: "CAM-2", title: "Add Multi-Language Support", tag: ["Feature Request"], userId: "usr-2", status: "In progress", priority: 3 },
    { id: "CAM-3", title: "Optimize Database Queries", tag: ["Feature Request"], userId: "usr-2", status: "In progress", priority: 1 },
    { id: "CAM-4", title: "Implement Email Notification System", tag: ["Feature Request"], userId: "usr-1", status: "In progress", priority: 3 },
    { id: "CAM-5", title: "Enhance Search Functionality", tag: ["Feature Request"], userId: "usr-5", status: "In progress", priority: 0 },
    { id: "CAM-6", title: "Third-Party Payment Gateway", tag: ["Feature Request"], userId: "usr-2", status: "Todo", priority: 1 },
    { id: "CAM-7", title: "Create Onboarding Tutorial", tag: ["Feature Request"], userId: "usr-1", status: "Backlog", priority: 2 },
    { id: "CAM-8", title: "Implement RBAC", tag: ["Feature Request"], userId: "usr-3", status: "In progress", priority: 3 },
    { id: "CAM-9", title: "Upgrade Server Infrastructure", tag: ["Feature Request"], userId: "usr-5", status: "Todo", priority: 2 },
    { id: "CAM-10", title: "Conduct Security Vulnerability Assessment", tag: ["Feature Request"], userId: "usr-4", status: "Backlog", priority: 1 },
  ],
  users: [
    { id: "usr-1", name: "Anoop Sharma" },
    { id: "usr-2", name: "Yogesh" },
    { id: "usr-3", name: "Shankar Kumar" },
    { id: "usr-4", name: "Ramesh" },
    { id: "usr-5", name: "Suresh" },
  ],
};

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
      return Object.keys(priorityLabels).map((priority) => ({
        key: priority,
        label: priorityLabels[priority],
        tickets: tickets.filter((ticket) => ticket.priority === parseInt(priority)),
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
