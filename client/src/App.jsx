import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Table from "./components/Table";
import { api } from "./boot/axios";

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get(`/users?q=${query}`);
        setUsers(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    let isSubscribed = false;

    if (!isSubscribed) {
      fetchUsers();
      isSubscribed = true;
    }

    return () => {
      isSubscribed = false;
    };
  }, [query]);

  return (
    <div className="container">
      <div className="wrapper">
        <Search setQuery={setQuery} />
        {users.length > 0 && <Table users={users} />}
        {error && <div>Server not found!</div>}
        {loading && <div>Loading...</div>}
      </div>
    </div>
  );
}

export default App;
