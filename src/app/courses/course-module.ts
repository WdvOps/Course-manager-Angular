import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { CommonModule } from "@angular/common"
import { StarModule } from "../shared/component/star-module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { CoreModule } from "../core/component/core-module";


@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        
        
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        CoreModule,
        RouterModule.forChild([
            {
              path: 'courses', component: CourseListComponent
            },
            {
              path: 'courses/info/:id', component: CourseInfoComponent
            },

        ])
    ]
})

export class CourseModule {

}