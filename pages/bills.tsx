import { useState } from "react";

interface BillItem {
  name: string;
  paid: boolean;
}

export default function Bills() {
  const [bill, setBill] = useState<string>("");
  const [bills, setBills] = useState<BillItem[]>([]);

  function addBill() {
    if (!bill) return;
    setBills([...bills, { name: bill, paid: false }]);
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
        placeholder="Enter bill"
        style={{ padding: "5px", marginRight: "10px" }}
      />

      <button onClick={addBill}>Add</button>

      <div style={{ marginTop: "20px" }}>
        {bills.map((b, i) => (
          <div key={i}>
            {b.name} - {b.paid ? "Paid" : "Unpaid"}

            {!b.paid && (
              <button style={{ marginLeft: "10px" }} onClick={() => markPaid(i)}>
                Mark Paid
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
