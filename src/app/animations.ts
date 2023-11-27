import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
    state('default', style({
        border: '2px solid #B2B6FF'
    })),
    state('highlighted', style({
        border: '4px solid #B2B6FF',
        filter: 'brightness(92%)'
    })),
    transition('default => highlighted', [
        animate('100ms ease-out',
            style({
                transform: 'scaled(1.02)'
            })),
        animate(200)
    ])
])

export const showStateTrigger = trigger('showState', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(300, style({
            opacity: 1
        }))
    ]),
    transition(':leave', [
        animate(300, style({
            opacity: 0
        }))
    ]),
])

export const clickConfirmationTrigger = trigger('clickConfirmation', [
    transition('* => checked', [
        animate('400ms ease-in', style({
            transform: 'scale(0.22)'
        }))
    ])
])

export const filtroTrigger = trigger('animacaoDoFiltro', [
    transition(':enter', [
        style({opacity: 0, width: 0}),
        animate('400ms ease-out', keyframes([
            style({ offset: 0, opacity: 0, width: 0 }),
            style({ offset: 0.5, opacity: 0.5, width: '*', backgroundColor: 'red' }),
            style({ offset: 1, opacity: 1, width: '*', backgroundColor: 'blue' })
        ]))
    ]),
    transition(':leave', [
        animate('400ms ease-out', 
        style({ opacity: 0, width: 0 }))
    ])
])

export const botaoTrigger = trigger('formularioValido', [
    transition('invalid => valid', [
        group([
            animate(200, style({
                backgroundColor: 'green'
            })),
            animate(100, style({
                transform: 'scale(1.8)'
            })),
        ]),
        animate(200, style({
            backgroundColor: 'scale(1)'
        }))
    ]),
    transition('valid => invalid', [
        group([
            animate(200, style({
                backgroundColor: 'grey'
            })),
            animate(100, style({
                transform: 'scale(0.8)'
            })),
        ]),
        animate(200, style({
            backgroundColor: 'scale(1)'
        }))
    ])
])