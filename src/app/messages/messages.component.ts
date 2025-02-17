import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-messages',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './messages.component.html',
  standalone: true,
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {
  }
}
