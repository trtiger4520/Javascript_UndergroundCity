import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div>
        Hi! {{ name }}!
    </div>
    `,
})

export class AppComponent implements OnInit {
    @Input() name: string;
    ngOnInit() {}
}