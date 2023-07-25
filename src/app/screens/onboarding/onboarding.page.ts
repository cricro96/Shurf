import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  @ViewChild('swiper') swiperRef: ElementRef | undefined;

  currentIndex = 0;

  onboardingScreenList = [
    {
      id: '1',
      onboardingImage: '../../../assets/images/onboarding/onboarding1.png',
      onboardingTitle: 'Find More Friends ',
      onboardingDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum tellus varius neque congue amet fames nisi, egestas.'
    },
    {
      id: '2',
      onboardingImage: '../../../assets/images/onboarding/onboarding2.png',
      onboardingTitle: 'Capture Your Best Moments',
      onboardingDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum tellus varius neque congue amet fames nisi, egestas.'
    },
    {
      id: '3',
      onboardingImage: '../../../assets/images/onboarding/onboarding3.png',
      onboardingTitle: 'Share Your Stroy',
      onboardingDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum tellus varius neque congue amet fames nisi, egestas.'
    },
  ];

  screenHeight = window.innerHeight;

  constructor(private router: Router, public platform: Platform) { }

  ngOnInit() {
  }

  slideChangeCall() {
    this.currentIndex = this.swiperRef?.nativeElement.swiper.activeIndex;
  }

  goTo(screen: any) {
    this.router.navigateByUrl(screen)
  }

  handleButtonPress() {
    if (this.currentIndex === 2) {
      this.router.navigateByUrl('/auth/sign-in')
    }
    else {
      this.swiperRef?.nativeElement.swiper.slideTo(this.currentIndex == 0 ? 1 : 2);
    }
  }

}
