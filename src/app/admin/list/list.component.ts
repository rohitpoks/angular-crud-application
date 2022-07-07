import { Component, OnInit } from '@angular/core';
import { AccessorService } from '../accessor.service';
import { Admin } from '../admin';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  people: Admin[] = [];
  constructor(private accessor: AccessorService) {}

  ngOnInit(): void {
    this.accessor.peopleList().subscribe(
      data => this.people = data
    );
  }

  onClickDel(id: number) {
    this.accessor.deleteList(id);
  }

  currentID = this.accessor.currentID;
}
