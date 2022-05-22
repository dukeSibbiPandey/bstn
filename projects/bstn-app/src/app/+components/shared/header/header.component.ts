import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, MenuItem } from 'primeng/api';
import { AuthService } from '../auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   visibleSidebar1;
   UserName: string;
   local: string;
   items: MenuItem[];
   items1: MenuItem[];
   items2: MenuItem[];
   constructor(public primeNGConfig: PrimeNGConfig, public authService: AuthService, public oAuthService: OAuthService) {
      this.items = [


         {

            label: 'Candidates',
            icon: 'pi pi-fw candidate-icon',
            items: [
               {
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                     {
                        label: 'Bookmark',
                        icon: 'pi pi-fw pi-bookmark'
                     },
                     {
                        label: 'Video',
                        icon: 'pi pi-fw pi-video'
                     },

                  ]
               },
               {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-trash'
               },
               {
                  separator: true
               },
               {
                  label: 'Export',
                  icon: 'pi pi-fw pi-external-link'
               }
            ]
         },
         {
            label: 'Employees',
            icon: 'pi pi-fw employee-badge',
            items: [
               {
                  label: 'Left',
                  icon: 'pi pi-fw pi-align-left'
               },
               {
                  label: 'Right',
                  icon: 'pi pi-fw pi-align-right'
               },
               {
                  label: 'Center',
                  icon: 'pi pi-fw pi-align-center'
               },
               {
                  label: 'Justify',
                  icon: 'pi pi-fw pi-align-justify'
               },

            ]
         },
         {
            label: 'Trainings',
            icon: 'pi pi-fw training-board',
            items: [
               {
                  label: 'New',
                  icon: 'pi pi-fw pi-user-plus',

               },
               {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-user-minus',

               },
               {
                  label: 'Search',
                  icon: 'pi pi-fw pi-users',
                  items: [
                     {
                        label: 'Filter',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                           {
                              label: 'Print',
                              icon: 'pi pi-fw pi-print'
                           }
                        ]
                     },
                     {
                        icon: 'pi pi-fw pi-bars',
                        label: 'List'
                     }
                  ]
               }
            ]
         },
         {
            label: 'Clients',
            icon: 'pi pi-fw peoples-icon',
            items: [
               {
                  label: 'Manage Clients',
                  icon: 'pi pi-fw pi-user-plus',
                  routerLink: ['/client/manage-clients'],
                  command: () => this.hideSideBar(),
               },
               {
                  label: 'Occurrences',
                  icon: 'pi pi-fw pi-users',
                  items: [
                     {
                        label: 'Responses',
                        icon: 'pi pi-fw pi-filter',
                        // items:[
                        //    {
                        //       label:'Print',
                        //       icon:'pi pi-fw pi-print'
                        //    }
                        // ]
                     },
                     // {
                     //    icon:'pi pi-fw pi-bars',
                     //    label:'List'
                     // }
                  ]
               },
               {
                  label: 'Sample Link',
                  icon: 'pi pi-fw pi-users',
                  items: [
                     {
                        label: 'Responses',
                        icon: 'pi pi-fw pi-filter',
                        // items:[
                        //    {
                        //       label:'Print',
                        //       icon:'pi pi-fw pi-print'
                        //    }
                        // ]
                     },
                     // {
                     //    icon:'pi pi-fw pi-bars',
                     //    label:'List'
                     // }
                  ]
               }
            ]
         },
         {
            label: 'Scheduling',
            icon: 'pi pi-fw calendar-week',
            items: [
               {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                     {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                     },
                     {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                     },

                  ]
               },
               {
                  label: 'Archieve',
                  icon: 'pi pi-fw pi-calendar-times',
                  items: [
                     {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                     }
                  ]
               }
            ]
         },

         {
            label: 'Improvement Plan',
            icon: 'pi pi-fw improvement-plan',
            items: [
               {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                     {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                     },
                     {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                     },

                  ]
               },
               {
                  label: 'Archieve',
                  icon: 'pi pi-fw pi-calendar-times',
                  items: [
                     {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                     }
                  ]
               }
            ]
         },


         {
            label: 'General',
            icon: 'pi pi-fw general-card',
            items: [
               {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                     {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                     },
                     {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                     },

                  ]
               },
               {
                  label: 'Archieve',
                  icon: 'pi pi-fw pi-calendar-times',
                  items: [
                     {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                     }
                  ]
               }
            ]
         },

         {
            label: 'Help',
            icon: 'pi pi-fw help-icon',
            items: [
               {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                     {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                     },
                     {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                     },

                  ]
               },
               {
                  label: 'Archieve',
                  icon: 'pi pi-fw pi-calendar-times',
                  items: [
                     {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                     }
                  ]
               }
            ]
         },

      ];


   }
   ngOnInit(): void {
      this.primeNGConfig.ripple = true;

      this.UserName = this.authService.isLoginData.name;
      this.local = this.authService.isLoginData.locale;

      this.items2 = [
         {
            label: this.UserName,
            icon: 'pi pi-fw user-icon',
            items: [

               {
                  label: 'My Dashboard',
                  icon: 'dashboard-icon comm-icon',
                  routerLink: ['/dashboard'],

               },
               {
                  label: 'Settings',
                  icon: 'setting-icon comm-icon',
                  routerLink: ['/settings'],

               },
               {
                  label: 'Change Password',
                  icon: 'change-icon comm-icon',
                  routerLink: ['/changepasword'],

               },
               {
                  label: 'Log Out',
                  icon: 'logout-icon comm-icon',
                  command: () => this.logOut(),

               },






            ]

         },

      ];
   }
   showUser: boolean;



   public get name() {
      if (!this.UserName) {
         let claims = this.oAuthService.getIdentityClaims();
         if (claims['name']) {
            this.authService.isLoginData = claims;
            this.UserName = claims['name'];

            this.items1 = [
               {
                  label: this.UserName,
                  icon: 'pi pi-fw user-icon',
                  items: [
                     {
                        label: 'Dashboard',
                        icon: 'pi pi-home',
                        routerLink: ['/dashboard'],

                     },
                     {
                        label: 'Log Out',
                        icon: 'pi pi-fw pi-user-plus',
                        command: () => this.logOut(),

                     },


                  ]
               },

            ];
         }

      }
      return this.UserName;
   }
   logOut() {
      this.oAuthService.logOut();
   }
   hideSideBar() {

      this.visibleSidebar1 = false;
   }

}