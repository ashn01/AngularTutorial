import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SectionModule } from '../section/section.module';

@Injectable()
export class PageToggleService {

  public routingCount = 0;
  constructor(private router:Router) { }

  goPage(target:string){
    this.routingCount++;
    this.router.navigateByUrl(target);
  }

}
