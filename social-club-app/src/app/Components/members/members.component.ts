import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMembers().subscribe(data => {
      this.members = data;
    });
  }

  addMember(member: any) {
    this.apiService.createMember(member).subscribe(data => {
      this.members.push(data);
    });
  }
}
