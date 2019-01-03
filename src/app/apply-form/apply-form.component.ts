import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
/*import { User } from '../user';  */
@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent implements OnInit {
  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;
  constructor(private modalService: BsModalService) {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  submit(): void {
   /*user: User = {
      name: $('#name').val(),
      lastName: $('#surname').val(),
    mail: $('#email').val(),
    section: $('#field').val()
    };
    console.log(user); */
    const user = {
        name: $('#name').val(),
        surname: $('#surname').val(),
        email: $('#email').val(),
        field: $('#field').val()
     };
    localStorage.setItem('user', JSON.stringify(user));

    this.modalRef.hide();
  }
  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'second' });
  }
  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }
    this.modalRef.hide();
    this.modalRef = null;
  }

  ngOnInit() {
  }

}
