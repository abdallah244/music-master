import { trigger, transition, style, query, group, animate } from '@angular/animations';

export const routeAnimations = [
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
        }),
      ], { optional: true }),

      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(-50px)' }))
        ], { optional: true }),

        query(':enter', [
          animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ], { optional: true })
      ])
    ])
  ])
];
