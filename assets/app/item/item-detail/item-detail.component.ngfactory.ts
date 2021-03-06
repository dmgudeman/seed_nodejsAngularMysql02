/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from './item-detail.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/common';
import * as import3 from './item-detail.component';
import * as import4 from '@angular/router';
import * as import5 from '../../company/company.service';
import * as import6 from '../item.service';
const styles_ItemDetailComponent:any[] = [import0.styles];
export const RenderType_ItemDetailComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_ItemDetailComponent,
  data: {}
}
);
export function View_ItemDetailComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    import1.ɵpid(0,import2.DatePipe,[import1.LOCALE_ID]),
      (l()(),import1.ɵeld(0,(null as any),(null as any),50,'div',[[
        'class',
        'container'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),47,'section',[
      [
        'class',
        'section'
      ]
      ,
      [
        'id',
        'section1'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),44,'div',[
      [
        'class',
        'column'
      ]
      ,
      [
        'id',
        'col2'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),30,'div',[
      [
        'class',
        'row'
      ]
      ,
      [
        'id',
        'row1'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(278528,(null as any),0,import2.NgClass,[
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),8,'div',[
      [
        'class',
        'input-box'
      ]
      ,
      [
        'id',
        'input-box1'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'label',[
      [
        'class',
        'label'
      ]
      ,
      [
        'for',
        'date'
      ]
      ,
      [
        'id',
        'date-label'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Date: '])),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'div',[
      [
        'class',
        'input'
      ]
      ,
      [
        'id',
        'date-text'
      ]
      ,
      [
        'name',
        'date'
      ]
      ,
      [
        'type',
        'text'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    )),
    import1.ɵppd(2),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),7,'div',[
      [
        'class',
        'input-box'
      ]
      ,
      [
        'id',
        'input-box2'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'label',[
      [
        'class',
        'label'
      ]
      ,
      [
        'for',
        'amount'
      ]
      ,
      [
        'id',
        'amount-label'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Amount: '])),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'div',[
      [
        'class',
        'input'
      ]
      ,
      [
        'id',
        'amount-text'
      ]
      ,
      [
        'name',
        'amount'
      ]
      ,
      [
        'type',
        'text'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '$ ',
      ''
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),7,'div',[
      [
        'class',
        'input-box'
      ]
      ,
      [
        'id',
        'input-box3'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'label',[
      [
        'class',
        'label'
      ]
      ,
      [
        'for',
        'hours'
      ]
      ,
      [
        'id',
        'hours-label'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Hours: '])),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'div',[
      [
        'class',
        'input'
      ]
      ,
      [
        'id',
        'hours-text'
      ]
      ,
      [
        'name',
        'hours'
      ]
      ,
      [
        'type',
        'text'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),9,'div',[
      [
        'class',
        'row'
      ]
      ,
      [
        'id',
        'row2'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),0,'div',[
      [
        'class',
        'input-box'
      ]
      ,
      [
        'id',
        'input-box21'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),4,'div',[
      [
        'class',
        'input-box'
      ]
      ,
      [
        'id',
        'input-box22'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'div',[
      [
        'class',
        'input'
      ]
      ,
      [
        'id',
        'description-text'
      ]
      ,
      [
        'name',
        'description'
      ]
      ,
      [
        'type',
        'textarea'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import3.ItemDetailComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.goToEditItem(co.item)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      '\n                    '
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n\n\n\n\n\n\n']))
  ]
  ,(ck,v) => {
    var co:import3.ItemDetailComponent = v.component;
    const currVal_0:any = 'row';
    const currVal_1:any = co.setColor(co.color);
    ck(v,8,0,currVal_0,currVal_1);
  },(ck,v) => {
    var co:import3.ItemDetailComponent = v.component;
    const currVal_2:any = import1.ɵunv(v,16,0,ck(v,17,0,import1.ɵnov(v,0),co.item.date,'M/d/yy'));
    ck(v,16,0,currVal_2);
    const currVal_3:any = co.item.amount;
    ck(v,26,0,currVal_3);
    const currVal_4:any = co.item.hours;
    ck(v,35,0,currVal_4);
    const currVal_5:any = co.item.description;
    ck(v,46,0,currVal_5);
  });
}
function View_ItemDetailComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'app-item-detail',([] as any[]),(null as any),(null as any),(null as any),View_ItemDetailComponent_0,RenderType_ItemDetailComponent)),
    import1.ɵdid(114688,(null as any),0,import3.ItemDetailComponent,[
      import4.Router,
      import4.ActivatedRoute,
      import5.CompanyService,
      import6.ItemService
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const ItemDetailComponentNgFactory:import1.ComponentFactory<import3.ItemDetailComponent> = import1.ɵccf('app-item-detail',import3.ItemDetailComponent,View_ItemDetailComponent_Host_0,{
  item: 'item',
  itemColor: 'itemColor'
}
,{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1ZvbHVtZXMvRy1EUklWRS9teURpcmVjdG9yeS9zZWVkX25vZGVqc0FuZ3VsYXJNeXNxbDAyL2Fzc2V0cy9hcHAvaXRlbS9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVm9sdW1lcy9HLURSSVZFL215RGlyZWN0b3J5L3NlZWRfbm9kZWpzQW5ndWxhck15c3FsMDIvYXNzZXRzL2FwcC9pdGVtL2l0ZW0tZGV0YWlsL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC50cyIsIm5nOi8vL1ZvbHVtZXMvRy1EUklWRS9teURpcmVjdG9yeS9zZWVkX25vZGVqc0FuZ3VsYXJNeXNxbDAyL2Fzc2V0cy9hcHAvaXRlbS9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1ZvbHVtZXMvRy1EUklWRS9teURpcmVjdG9yeS9zZWVkX25vZGVqc0FuZ3VsYXJNeXNxbDAyL2Fzc2V0cy9hcHAvaXRlbS9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5jb21wb25lbnQudHMuSXRlbURldGFpbENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8c2VjdGlvbiBpZD1cInNlY3Rpb24xXCIgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJjb2wyXCIgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJyb3cxXCIgY2xhc3M9XCJyb3dcIiBbbmdDbGFzc109XCJzZXRDb2xvcihjb2xvcilcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW5wdXQtYm94MVwiIGNsYXNzPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCIgaWQ9XCJkYXRlLWxhYmVsXCIgY2xhc3M9XCJsYWJlbFwiPkRhdGU6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkYXRlLXRleHRcIiBuYW1lPVwiZGF0ZVwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiID57e2l0ZW0uZGF0ZSB8IGRhdGU6J00vZC95eSd9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnB1dC1ib3gyXCIgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFtb3VudFwiIGlkPVwiYW1vdW50LWxhYmVsXCIgY2xhc3M9XCJsYWJlbFwiPkFtb3VudDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFtb3VudC10ZXh0XCIgbmFtZT1cImFtb3VudFwiIGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiID4kIHt7aXRlbS5hbW91bnR9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnB1dC1ib3gzXCIgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhvdXJzXCIgaWQ9XCJob3Vycy1sYWJlbFwiIGNsYXNzPVwibGFiZWxcIj5Ib3VyczogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImhvdXJzLXRleHRcIiBuYW1lPVwiaG91cnNcIiBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiA+e3tpdGVtLmhvdXJzfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cInJvdzJcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnB1dC1ib3gyMVwiIGNsYXNzPVwiaW5wdXQtYm94XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImlucHV0LWJveDIyXCIgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImRlc2NyaXB0aW9uLXRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT0gXCJnb1RvRWRpdEl0ZW0oIGl0ZW0pXCI+e3tpdGVtLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbjwvZGl2PlxuXG5cblxuXG5cblxuIiwiPGFwcC1pdGVtLWRldGFpbD48L2FwcC1pdGVtLWRldGFpbD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF1QjtJQUNuQjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBdUM7SUFDbkM7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQThCO0lBQzFCO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFBQTs7Ozs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUF1RDtJQUNuRDtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBdUM7SUFDbkM7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQWdEO0lBQWM7SUFDOUQ7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQTJEO01BQUE7TUFBQTtJQUFBO0lBQUE7Z0JBQUE7SUFBbUM7SUFDNUY7SUFDTjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBdUM7SUFDbkM7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQW9EO0lBQWdCO0lBQ3BFO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUErRDtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQXVCO0lBQ3BGO0lBQ047TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQXVDO0lBQ25DO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUFrRDtJQUFlO0lBQ2pFO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUE2RDtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQW9CO0lBQy9FO0lBQ0o7SUFDTjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBMkI7SUFDdkI7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQThDO0lBQzlDO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUF3QztJQUNwQztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFJSztRQUFBO1FBQUE7TUFBQTtNQUpMO0lBQUE7SUFJb0M7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUM5QjtJQUNKO0lBQ0o7SUFDSjtJQUNBO0lBQ1I7Ozs7SUEzQnFCO0lBQVk7SUFBM0IsU0FBZSxVQUFZLFNBQTNCOzs7SUFHbUU7SUFBQTtJQUlJO0lBQUE7SUFJRjtJQUFBO0lBVXpCO0lBQUE7Ozs7O0lDeEJ4RDtnQkFBQTs7Ozs7SUFBQTtLQUFBOzs7SUFBQTs7Ozs7OzsifQ==
