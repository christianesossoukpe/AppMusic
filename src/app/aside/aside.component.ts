import { Component, Input } from '@angular/core';
import { Album, List } from '../album';
import { ALBUM_LISTS } from '../mocks-albums';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  @Input() asideEmit?: Album;
  songs?: List;
  ngOnChanges() {
    this.songs = ALBUM_LISTS.filter((a) => {
      return a.id == this.asideEmit?.id;
    })
    [0]
    console.log(this.asideEmit);
    
  }
}
