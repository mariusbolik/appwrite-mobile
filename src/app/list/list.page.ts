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
      .setEndpoint("https://api.myshoefitter.com/v1")
      .setProject("mysf")
      .setKey(
        "aa5cafee6c49f5bdadb98b11b3192a910d6551c0bffb1675fb36e46109ad808be43bbcb103a7a912ed3b610b6a4d08e0725ca4b0135893b12c24b1937906b9ab784091e4be6faef0df6ecaa37d6eda4016f0ad7781ec669b93bbcc1479018352615e55a65541bf89e1b61e85caddb75d451272bdc0579ae9cf9f0ebf54833965"
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

    this.getDocuments();
  }

  navigate(id: string) {
    this.navController.navigateForward(`/mysf/collections/main`);
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


}
