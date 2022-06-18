import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList:user[]=[]

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.getUsers()
  }


  getUsers() {
    this.userService.getAllUsers().subscribe(res =>{
      this.userList=res
    })
  }

}
