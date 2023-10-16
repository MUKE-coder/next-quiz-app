"use client";
import React from "react";

export default function Search() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for Products..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
