import { Component, Input } from '@angular/core';
import { SearchService } from '../SERVICES/search.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  cosmetics: any[]=[];
  resultCount: any;

  constructor(private searchService: SearchService, private http: HttpClient, private router:Router) {
    this.searchService.keyword$.subscribe(keyword => {
      if (keyword) {
        this.http.get<any[]>(`http://localhost:3000/search?keyword=${keyword}`).subscribe(cosmetics => {
          this.cosmetics = cosmetics;
          this.resultCount = cosmetics.length;
        }, error => {
          console.error(error);
        });
      }
    });
  }
  viewCosmeticDetail(f: any) {
    this.router.navigate(['app-productdetail', f._id]).then(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }
}
