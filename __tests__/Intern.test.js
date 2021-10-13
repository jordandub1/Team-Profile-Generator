const Intern = require("../lib/Intern");

test("Can instantiate intern instance", () => {
    const emp = new Intern();
    expect(typeof(emp)).toBe("object");
})

test("Can set intern name using constructor", () => {
    const name = "Jordan";
    const emp = new Intern(name);
    expect(emp.name).toBe(name);
})

test("Can set intern id using Intern constructor", () => {
    const id = 123456;
    const emp = new Intern("Jordan", 123456);
    expect(emp.id).toBe(id);
})

test("Can set intern email using Intern constructor", () => {
    const email = "jordan.dubose1@gmail.com";
    const emp = new Intern("Jordan", 123456, email);
    expect(emp.email).toBe(email);
})

test("Can set intern school using Intern constructor", () => {
    const school = "University of North Carolina";
    const emp = new Intern("Jordan", 123456, "jordan.dubose1@gmail.com", school);
    expect(emp.school).toBe(school);
})

test("Can set intern role using Intern constructor", () => {
    const role = "Intern";
    const emp = new Intern("Jordan", 123, "jordan.dubose1@gmail.com", "University of North Carolina", role);
    expect(emp.role).toBe(role);
})