/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-skeleton-css',
	standalone: true,
	imports: [],
	templateUrl: './skeleton-css.component.html',
	styleUrl: './skeleton-css.component.scss'
})
export class SkeletonCssComponent implements OnInit {
	@ViewChild('cardTemplate') cardTemplate!: ElementRef<HTMLTemplateElement>;
	skeletons = Array(40).fill(0);
	showSkeleton = true;
	// ngAfterViewInit(): void {
	// 	console.log(this.cardTemplate);
	// 	//this.cargarContenidoDOM();
	// }

	//Enfoque Imperativo
	cargarContenidoDOM() {
		const grid = document.querySelector('.grid');

		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((posts) => {
				if (grid) {
					grid.innerHTML = '';
				}
				posts.forEach((post: any) => {
					const div = this.cardTemplate.nativeElement.content.cloneNode(true) as HTMLDivElement;

					const cardTitle = div.querySelector('[data-title]');
					const cardBody = div.querySelector('[data-body]');
					if (cardTitle) {
						cardTitle.textContent = post.title;
					}
					if (cardBody) {
						cardBody.textContent = post.body;
					}
					grid?.appendChild(div);
				});
			});
	}

	posts: any[] = [];

	ngOnInit(): void {
		console.log('ngOnInit');
		setTimeout(() => {
			this.showSkeleton = false;
			this.loadContent();
		}, 3000);
	}

	loadContent() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((posts) => {
				this.posts = posts;
			});
	}
}
