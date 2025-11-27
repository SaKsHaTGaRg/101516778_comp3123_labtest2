import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      onSearch(value.trim());
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-box">
      <input
        placeholder="Enter a city..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
