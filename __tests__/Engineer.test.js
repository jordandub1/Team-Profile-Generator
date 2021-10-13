const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Can instantiate engineer instance", () => {
    const emp = new Engineer();
    expect(typeof(emp)).toBe("object");
})

test("Can set engineer name using constructor", () => {
    const name = "Jordan";
    const emp = new Engineer(name);
    expect(emp.name).toBe(name);
})

test("Can set engineer id using Engineer constructor", () => {
    const id = 123456;
    const emp = new Engineer("Jordan", 123456);
    expect(emp.id).toBe(id);
})

test("Can set engineer email using Engineer constructor", () => {
    const email = "jordan.dubose1@gmail.com";
    const emp = new Engineer("Jordan", 123456, email);
    expect(emp.email).toBe(email);
})

test("Can set engineer github username using Engineer constructor", () => {
    const github = "jordandub1";
    const emp = new Engineer("Jordan", 123456, "jordan.dubose1@gmail.com", github);
    expect(emp.github).toBe(github);
})

test("Can set engineer role using Engineer constructor", () => {
    const role = "Engineer";
    const emp = new Engineer("Jordan", 123456, "jordan.dubose1@gmail.com", "jordandub1", role);
    expect(emp.role).toBe(role);
})