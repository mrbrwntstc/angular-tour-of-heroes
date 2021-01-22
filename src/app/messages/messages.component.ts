import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /**
   * to create a field that is of a Service object, create the field in the constructor
   * angular will inject the field to the parameter as a singleton
   * 
   * messageService needs to be public because it's going to be binded to the template
   * angular only binds to public component properties
   */
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
