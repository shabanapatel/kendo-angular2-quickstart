import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: [
      // load the default theme
      '../node_modules/@telerik/kendo-theme-default/dist/all.css'
    ],
    template: `
      <h1>My First Kendo UI Angular 2 App</h1>
      <button kendoButton (click)="onButtonClick()" [primary]="true">
        My Kendo UI Button
      </button>
 <div class="example-config">
      Current value: {{value | json}}
    </div>
    <div class="example-wrapper">
      <p>Favorite sport:</p>
<form class="from-inline">
      <kendo-multiselect [data]="listItems" 
            [textField]="'text'"
            [valueField]="'value'"
            [valuePrimitive]="true">
        <template kendoDropDownListItemTemplate let-dataItem>
                <div class="row">
                    <div class="col-md-10">{{dataItem.text}}</div>
                    <div class="col-md-2"> <span class="label label-default">{{dataItem.groupText}}</span></div>
                </div>
        </template>
</kendo-multiselect>
</form>
    </div>
    `
})
export class AppComponent {
    public listItems: Array<{ text: string, value: number, groupText: string, groupCode: string }> = [
        { text: "All Products", value: 1, groupText: "Product", groupCode: "01" },
        { text: "MLPA", value: 2, groupText: "Product", groupCode: "01" },
        { text: "PIA", value: 3, groupText: "Product", groupCode: "01" },
        { text: "All Segments", value: 11, groupText: "Segments", groupCode: "02" },
        { text: "PA", value: 12, groupText: "Segments", groupCode: "02" },
        { text: "SPA", value: 13, groupText: "Segments", groupCode: "02" }

    ]
    public selectedValue: number = 2;
    public list_Items: Array<string> = ['Baseball', 'Basketball', 'Cricket', 'Field Hockey', 'Football', 'Table Tennis', 'Tennis', 'Volleyball'];
    public value: any = ['Baseball']

    onButtonClick() {
       alert('Hello from Kendo UI!');
    }
}
