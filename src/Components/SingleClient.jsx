function SingleClient({ client, onDeleteClient, onToggleClient }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={client.packed} // Usa 'checked' per lo stato della checkbox
        onChange={() => onToggleClient(client.id)}
        aria-label={`Mark ${client.description} as packed`} // Accessibilità
      />
      <span style={{ textDecoration: client.packed ? "line-through" : "none" }}>
        {client.quantity} {client.description}
      </span>
      <button
        onClick={() => onDeleteClient(client.id)}
        aria-label={`Delete ${client.description}`} // Accessibilità
      >
        ❌
      </button>
    </li>
  );
}

export default SingleClient;
