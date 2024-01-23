import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss'],
})
export class InquiryComponent implements OnInit {
  ngOnInit(): void {
    this.oninquiryForm();
  }
  inqueryForm!: FormGroup;
  oninquiryForm() {
    this.inqueryForm = new FormGroup({
      item: new FormControl(null),
      itemDetails: new FormControl(null),
      quantity: new FormControl(null),
      pics: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.inqueryForm.value);
  }
}
