export class Contact {

    fname : string;
    lname : string;
    phone : string;
    email : string;
  
    constructor(fn: string, ln: string, pn: string, ea: string) {
      this.fname = fn;
      this.lname = ln;
      this.phone = pn;
      this.email = ea;
    }
  
  /*
  getFirstName() : string {
    return this.fname;
  }
  getLastName() : string {
    return this.lname;
  }
  getPhoneNum() : string {
    return this.phone;
  }
  getEmailAdd() : string {
    return this.email;
  }
  */
  }
  