import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgClass
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('strategium');
  readonly router = inject(Router);

  isPhonePortrait = false;
  isPhoneLandscape = false;
  isSmallScreen = false;
  isPhone: boolean = false;
  isTablet: boolean = false;
  
  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetLandscape)
      .subscribe(result => {
        this.isPhoneLandscape = result.matches;
        console.log('isPhoneLandscape (inside):', this.isPhoneLandscape);

      });
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.isPhonePortrait = result.matches;
        console.log('isPhonePortrait (inside):', this.isPhonePortrait);

      });
    this.responsive.observe(Breakpoints.Handset)
      .subscribe(result => {
        this.isPhone = result.matches;
        console.log('isPhone (inside):', this.isPhone);

      });
    this.responsive.observe(Breakpoints.Tablet)
      .subscribe(result => {
        this.isTablet = result.matches;
        console.log('isTablet (inside):', this.isTablet);

      });
  }
}
