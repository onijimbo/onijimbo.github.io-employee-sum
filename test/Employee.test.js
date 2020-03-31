const Employee = require('../lib/Employee')

test('can instantiate Employee instance', () => {
    const e = new Employee();
    expect(typof(e)).toBe('object');
});

test('Can set name via constructor arguments', ()=> {
    const name = 'gordon'
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('Can set id via constructor argument', () => {
    const testId = 05
    const e = new Employee('gordon', testId);
    expect(e.id).toBe(testId);
});

test('can set email via constructor argument', ()=>{
    const testEmail = 'gordan@blackmesa.com'
    const e = new Employee('Foo', 05, testEmail);
    expect(e.email).toBe(testEmail);

});


test('Can set name via getName()', ()=> {
    const name = 'gordon'
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('Can set id via getId()', () => {
    const testId = 05
    const e = new Employee('gordon', testId);
    expect(e.id).toBe(testId);
});

test('can set email via getEmail()', ()=>{
    const testEmail = 'gordan@blackmesa.com'
    const e = new Employee('gordon', 05, testEmail);
    expect(e.email).toBe(testEmail);

});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("gordon", 1, "gordon@blackmesa.com");
    expect(e.getRole()).toBe(testValue);
  });
  