import React, { useState } from "react";

const Feedback = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const submitFeedback = () => {
    if (text.trim()) {
      setComments([{ name: name || "Anonymous", text }, ...comments]);
      setName("");
      setText("");
    }
  };

  return (
    <div className="px-6 py-10 bg-gray-50 dark:bg-gray-800 border-t mt-10">
      <h2 className="text-xl font-bold mb-4">💬 Feedback</h2>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your Name (optional)"
          className="p-2 rounded border dark:bg-gray-700"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Leave your feedback..."
          className="p-2 rounded border dark:bg-gray-700"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={submitFeedback}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-fit"
        >
          Submit
        </button>
      </div>
      <div className="mt-6 space-y-4">
        {comments.map((c, i) => (
          <div key={i} className="bg-white dark:bg-gray-700 p-4 rounded shadow">
            <p className="font-semibold">{c.name}</p>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
