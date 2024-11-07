function MyFooter({ clients }) {
  if (!clients.length) {
    return (
      <p className="stats">
        <em>Start adding some clients to your packing list 🚀</em>
      </p>
    );
  }

  const numClients = clients.length;
  const numPacked = clients.filter((item) => item.packed).length;
  const percentage =
    numClients > 0 ? Math.round((numPacked / numClients) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numClients} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default MyFooter;
//questa è invece una priva di modifica sul branch newTest
//
