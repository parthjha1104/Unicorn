"use client" ;

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  async function sendMessage() {
    if (!message.trim()) return 
    const response = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        message,
      }),
  });
  const data = await response.json();
  setResponse(data.response);
  }
 
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">NTM-VA</h1>

      <div className="w-full max-w-3xl bg-gray-900 rounded-xl p-6 shadow-lg">
         <div className="h-96 overflow-y-auto border border-gray-700 rounded-lg p-4 mb-4">
          {response || "Welcome to NTM-VA Chat Page"}
         </div>

         <div className="flex gap-2">
          <input
            value= {message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 rounded-lg bg-gray-800 p-3 outline-none"
            placeholder="Type your messsage..."
          
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 px-6 rounded-lg hover:bg-blue-700" 
          >
            Send
          </button>
         </div>
      </div>
      
    </main>
  );
}
