export function formatCurr(val) {
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(10000);
}
