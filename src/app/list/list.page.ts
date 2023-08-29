import { Component, OnInit, inject, signal } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import * as web from 'appwrite';
import * as sdk from 'node-appwrite';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class ListPage implements OnInit {

  public items = signal<sdk.Models.Database[] | sdk.Models.Collection[] | any[]>([]);
  public totalItems = signal<number>(0);
  public pageTitle = signal<string>('');

  public route = inject(ActivatedRoute);

  private client = new sdk.Client();
  private navController = inject(NavController);


  ngOnInit() {
    this.client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("liveparking-api")
      .setKey(
        "546c3f33723c60576f997caec150ea6e4319e9d1ba1bc0cf2b5eba549a186b51e502ded5b9b902da2d10406dd6dd232c2b8517f4ae66c36406abda200b69ebc424f50dcb579abee78134850cfd761b9796c95e4c22be461570bdd84936df37489412e6a674fb5e0cd4fd29bb46975b90360b90ae37fec40f81270e787d5afba0"
      )
      .setSelfSigned(true);

    const entity = this.route.snapshot.paramMap;
    console.log('entitly', entity)

    this.route.params.subscribe(params => {
      console.log('params', params)
      if ('entity' in params) {
        this.pageTitle.set(params['entity']);
      }

   });

    this.getDatabases();
  }

  navigate(id: string) {
    this.navController.navigateForward(`/collections/list`);
    // this.navController.navigateForward(`/mysf/collections/${id}`);
  }

  async getDatabases() {
    const db = new sdk.Databases(this.client);
    const { databases, total } = await db.list();

    this.items.set(databases);
    this.totalItems.set(total);
  }

  async getCollections() {
    const db = new sdk.Databases(this.client);
    const { collections, total } = await db.listCollections('main');
    console.log('collections', collections)

    this.items.set(collections);
    this.totalItems.set(total);
  }

  async getDocuments() {
    const db = new sdk.Databases(this.client);
    const { documents, total } = await db.listDocuments('main', 'scans');
    console.log('documents', documents)

    this.items.set(documents);
    this.totalItems.set(total);
  }

  async getUsers() {
    const usr = new sdk.Users(this.client);
    const { users, total } = await usr.list();
    console.log('users', users)

    this.items.set(users);
    this.totalItems.set(total);
  }

}
