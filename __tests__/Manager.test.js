const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
    const emp = new Manager();
    expect(typeof(emp)).toBe("object");
})

test("Can set manager name using constructor", () => {
    const name = "Jordan";
    const emp = new Manager(name);
    expect(emp.name).toBe(name);
})

test("Can set manager id using Manager constructor", () => {
    const id = 123456;
    const emp = new Manager("Jordan", 123456);
    expect(emp.id).toBe(id);
})

test("Can set manager email using Manager constructor", () => {
    const email = "jordan.dubose1@gmail.com";
    const emp = new Manager("Jordan", 123456, email);
    expect(emp.email).toBe(email);
})

test("Can set manager office number using Manager constructor", () => {
    const officeNumber = 321;
    const emp = new Manager("Jordan", 123456, "jordan.dubose1@gmail.com", officeNumber);
    expect(emp.officeNumber).toBe(officeNumber);
})

test("Can set manager role using Manager constructor", () => {
    const role = "Manager";
    const emp = new Manager("Jordan", 123456, "jordan.dubose1@gmail.com", 321, role);
    expect(emp.role).toBe(role);
})