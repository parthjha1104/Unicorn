"use client";

import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = message;

    // Show user message immediately
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);
    

    setMessage("");
    setLoading(true);

    try {
      const apiResponse = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await apiResponse.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response,
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Unable to contact the backend.",
        },
      ]);
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">
        NTM-VA
      </h1>

      <div className="w-full max-w-3xl bg-gray-900 rounded-xl shadow-lg p-6">

        {/* Chat Window */}
        <div className="h-[500px] overflow-y-auto border border-gray-700 rounded-lg p-4 mb-4 space-y-3">

          {messages.length === 0 ? (
            <p className="text-gray-400">
              Welcome to NTM-VA Chat Page
            </p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-xl p-3 ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  <ReactMarkdown>
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))
          )}
          {loading &&(
            <div className="flex justify-start">
              <div className="max-w-[75%] rounded-xl p-3 bg-gray-800 text-gray-300 animate-pul">
                NTM-VA is thinking...
              </div>
            </div>
          )

          }

          <div ref={bottomRef} />

        </div>

        {/* Input */}
        <div className="flex gap-2">

          <input
            disabled={loading}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg bg-gray-800 p-3 outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button
            disabled={loading}
            onClick={sendMessage}
            className={`px-6 rounded-lg transition ${
              loading
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Thinking" : "Send"}
          </button>

        </div>

      </div>
    </main>
  );
}