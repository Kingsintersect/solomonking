import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent {

  form: FormGroup = this.fb.group({
    from_name: "",
    subject: "",
    to_name: "King solomon",
    from_email: "",
    message: "",
  });

  constructor(private fb: FormBuilder){}

  async send(){
    emailjs.init("Yl8AbgaWo9tFcec3n");
    const data = this.form.value;
    
    let response = await emailjs.send("service_0o942oz","template_1djet4k",{
        subject: data.subject,
        to_name: data.to_name,
        from_name: data.from_name,
        from_email: data.from_email,
        message: data.message,
    });   

    alert("Message Has Been Sent!");
    this.form.reset();
  }

}
