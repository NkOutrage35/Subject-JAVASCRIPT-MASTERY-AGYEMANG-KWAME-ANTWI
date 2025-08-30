const table = document.getElementById("tbody");

let students = [
  { name: "Ama", score: 85 },
  { name: "Kwame", score: 92 },
  { name: "Efua", score: 76 },
];

students.forEach(display);

function display(element) {
  const row = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");

  td1.textContent = element.name;
  td2.textContent = element.score;

  row.appendChild(td1);
  row.appendChild(td2);

  if (element.score >= 80) {
    td2.setAttribute("class", "high-score");
  }

  table.append(row);
}
