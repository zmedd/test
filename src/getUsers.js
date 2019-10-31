const users = [];
for (let i = 0; i < 100; i++) {
    users.push({ id: `${i}`, name: `User ${i}`, othersClicked: 0, show: true });
}
export default users;
