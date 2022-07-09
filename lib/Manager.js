class Manager extends Employee {
    constructor(name, id, email) {
        super(officeNumber)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    // Overridden to return 'Manager' 
    getRole() {
        return "Manager"
    }
}