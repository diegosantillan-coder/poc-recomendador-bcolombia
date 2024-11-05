import { NgClass } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
	selector: 'a-card-chat',
	standalone: true,
	imports: [NgClass],
	templateUrl: './a-card-chat.component.html',
	styleUrl: './a-card-chat.component.scss',
	encapsulation: ViewEncapsulation.None // O encapsulation: ViewEncapsulation.ShadowDom
})
export class ACardChatComponent {
	@Input() chats: { text: SafeHtml; isUser: boolean }[] = [];
}
