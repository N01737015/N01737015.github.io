import { useEffect, useState } from "react";

// Interface for the quote data we receive from API
interface QuoteData {
  quote: string;
  author: string;
}

export default function DailyQuote() {
  // State to store quote data
  const [data, setData] = useState<QuoteData | null>(null);

  // State for loading message
  const [loading, setLoading] = useState(true);

  // State for error handling
  const [error, setError] = useState<string | null>(null);

  // Runs once when component loads
  useEffect(() => {
    const API_URL = "https://dummyjson.com/quotes/random";

    // Function to fetch quote from API
    const fetchQuote = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_URL);

        if (!response.ok) {
          setError("Error fetching quote.");
          setLoading(false);
          return;
        }

        const json = await response.json();

        // Save quote data into state
        setData({
          quote: json.quote,
          author: json.author,
        });

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch quote.");
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div
        style={{
        marginTop: "20px",
        padding: "10px",
        background: "#f0f0f0", // Change the background to gray
        border: "1px solid #ddd",
        borderRadius: "6px",    // Make the box slightly rounded
        }}
        >

      <strong>Daily Quote</strong>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <>
          <p>"{data.quote}"</p>
          <p>— {data.author}</p>
        </>
      )}
    </div>
  );
}
