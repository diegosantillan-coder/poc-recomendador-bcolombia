import { Component } from '@angular/core';
import { HomeComponent } from '@components/home/home.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
	selector: 'app-skeleton',
	standalone: true,
	imports: [NgxSkeletonLoaderModule, HomeComponent],
	templateUrl: './skeleton.component.html',
	styleUrl: './skeleton.component.scss'
})
export class SkeletonComponent {}
