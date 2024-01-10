interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const bojack:Student = {firstName: "Bojack", lastName: "Klug", age: 29, location: "Nairobi"};
const justus:Student = {firstName: "Justus", lastName: "Nett", age: 26, location: "Nakuru"};

const studentsList:Student[] = [bojack, justus];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const tableHead: HTMLTableSectionElement = document.createElement("thead");
const tableBody: HTMLTableSectionElement = document.createElement("tbody");

const rowHead: HTMLTableRowElement = tableHead.insertRow(0);

["FirstName", "Location"].forEach((headerText, index) => {
    const cell: HTMLTableCellElement = rowHead.insertCell(index);
    cell.innerHTML = headerText;
});
table.append(tableHead);


studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tableBody.insertRow(0);
    const firstName: HTMLTableCellElement = row.insertCell(0);
    const location: HTMLTableCellElement = row.insertCell(1);

    firstName.innerHTML = student.firstName;
    location.innerHTML = student.location;
});

table.append(tableBody);
body.append(table);