"use strict";
const users = [
    { type: 'admin', id: 1, email: '1', some: 1 },
    { type: 'manager', id: 2, email: '2', accessLevel: 1 },
    { type: 'client', id: 1, email: '1', age: 18, blocked: false },
];
const routRecords = [];
function typeFilter(variant) {
    return (el) => el.type === variant;
}
let clU = users.filter(typeFilter('client'));
let rR = routRecords.filter(typeFilter('redirect'));
