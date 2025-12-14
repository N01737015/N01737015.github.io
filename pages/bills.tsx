import { useEffect, useState } from "react";

// Interface for each bill item
interface Bill {
  name: string;
  paid: boolean;
  addedBy: string;
}

export default function Bills() {
  // Input field value
  const [bill, setBill] = useState("");

  // List of bills
  const [bills, setBills] = useState<Bill[]>([]);

  // Username from Profile page
  const [username, setUsername] = useState("");

  // Used to avoid saving before loading data
  const [loaded, setLoaded] = useState(false);

  // Load saved user and bills when page loads
  useEffect(() => {
    const u = localStorage.getItem("homeSyncUserName");
    const saved = localStorage.getItem("billList");

    if (u) setUsername(u);
    if (saved) setBills(JSON.parse(saved));

    setLoaded(true);
  }, []);

  // Save bills to localStorage when they change
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("billList", JSON.stringify(bills));
  }, [bills, loaded]);

  function addBill() {
    // User must set name first
    if (!username) {
      alert("Set your name in Profile first.");
      return;
    }

    if (!bill) return;

    setBills([
      ...bills,
      { name: bill, paid: false, addedBy: username },
    ]);

    setBill("");
  }

  function markPaid(index: number) {
    const copy = [...bills];
    copy[index].paid = true;
    setBills(copy);
  }

  return (
    <div>
      <h1>Bills & Payments</h1>

      <input
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        placeholder="Add a bill"
      />

      <button onClick={addBill}>Add</button>

      <div>
        {bills.map((b, i) => (
          <div key={i}>
            {b.name} (added by {b.addedBy}) –{" "}
            {b.paid ? "Paid" : "Unpaid"}

            {!b.paid && (
              <button onClick={() => markPaid(i)}>
                Mark Paid
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
