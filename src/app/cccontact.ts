export class Contact {

    id : number;
    fname : string;
    lname : string;
    phone : string;
    email : string;
  
    constructor(i : number, fn: string, ln: string, pn: string, ea: string) {
      this.id = i;
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
  