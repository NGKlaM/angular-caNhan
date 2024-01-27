import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../../../../types/User';
import { UserService } from '../../../../services/users/user.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  userService = inject(UserService); // inject vao bien

  searchText = '';
  userList: User[] = [];
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    // Lay searchText From Url
    this.route.queryParams.subscribe((params) => {
      this.searchText = params['search'];
      return this.userService
        .getUserListAdmin(this.searchText)
        .subscribe((res) => (this.userList = res.data));
    });
  }
  handleDeleteUser(id: string) {
    console.log(id);
    if (window.confirm('Do you really remove user?')) {
      this.userService
        .deleteUser(id)
        .subscribe(
          () =>
            (this.userList = this.userList.filter((user) => user._id !== id))
        );
    }
  }
}
