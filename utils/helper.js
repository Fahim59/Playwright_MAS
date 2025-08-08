const { faker } = require('@faker-js/faker');

class helper {
  static getFullName() {
    return faker.person.fullName();
  }

  static getFirstName() {
    return faker.person.firstName();
  }

  static getLastName() {
    return faker.person.lastName();
  }

  static getAddress() {
    return faker.location.streetAddress();
  }

  static getState() {
    return faker.location.state();
  }

  static getCity() {
    return faker.location.city();
  }

  static getCompany() {
    return faker.company.name();
  }
}

module.exports = { helper };