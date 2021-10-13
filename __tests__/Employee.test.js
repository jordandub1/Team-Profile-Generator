const Employee = require("../lib/Employee");
const { it, expect, test } = require("@jest/globals");
const { describe } = require("yargs");
    
test("Can instantiate employee instance", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
})

test("Can set employee name using constructor", () => {
    const name = "Jordan";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
})

test("Can set employee id using Employee constructor", () => {
    const id = 123456;
    const emp = new Employee("Jordan", 123456);
    expect(emp.id).toBe(id);
})

test("Can set employee email using Employee constructor", () => {
    const email = "jordan.dubose1@gmail.com";
    const emp = new Employee("Jordan", 123456, email);
    expect(emp.email).toBe(email);
})

test("Can set employee role using Employee constructor", () => {
    const role = "Employee";
    const emp = new Employee("Jordan", 123456, "jordan.dubose1@gmail.com", role);
    expect(emp.role).toBe(role);
})