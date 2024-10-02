import { useState } from "react";
import SingleClient from "./SingleClient";

function ClientList({ clients, onDeleteClient, onToggleClient, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  const sortClients = (clients, sortBy) => {
    switch (sortBy) {
      case "description":
        return clients
          .slice()
          .sort((a, b) => a.description.localeCompare(b.description));
      case "packed":
        return clients
          .slice()
          .sort((a, b) => Number(a.packed) - Number(b.packed));
      default:
        return clients; // ordine di inserimento
    }
  };

  const sortedClients = sortClients(clients, sortBy);

  return (
    <div className="list">
      {clients.length === 0 ? ( // Gestione della lista vuota
        <p>No clients found. Please add some!</p>
      ) : (
        <ul>
          {sortedClients.map((client) => (
            <SingleClient
              client={client}
              onDeleteClient={onDeleteClient}
              onToggleClient={onToggleClient}
              key={client.id}
            />
          ))}
        </ul>
      )}

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList} aria-label="Clear the client list">
          Clear list
        </button>
      </div>
    </div>
  );
}

export default ClientList;
