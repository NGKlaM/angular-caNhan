import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { ProductCRUDComponent } from './pages/admin/product-crud/product-crud.component';
import { CreateComponent } from './pages/admin/create/create.component';
import { EditComponent } from './pages/admin/edit/edit.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { ListComponent as ListCategoryComponent } from './pages/admin/categories/list/list.component';
import { CreateComponent as CreateCategoryComponent } from './pages/admin/categories/create/create.component';
import { EditComponent as EditCategoryComponent } from './pages/admin/categories/edit/edit.component';

import { ListComponent as ListUserComponent } from './pages/admin/users/list/list.component';
import { CreateComponent as CreateUserComponent } from './pages/admin/users/create/create.component';
import { EditComponent as EditUserComponent } from './pages/admin/users/edit/edit.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'register', component: RegisterComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
          { path: 'products', component: ProductCRUDComponent },
          { path: 'products/create', component: CreateComponent },
          { path: 'products/edit/:id', component: EditComponent },
          { path: 'categories/list', component: ListCategoryComponent },
      { path: 'categories/create', component: CreateCategoryComponent },
      { path: 'categories/edit/:id', component: EditCategoryComponent },
      { path: 'users/list', component: ListUserComponent },
      { path: 'users/create', component: CreateUserComponent },
      { path: 'users/edit/:id', component: EditUserComponent },
        ],
      },
]
