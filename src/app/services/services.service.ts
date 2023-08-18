import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  async loadProjets(projectName: string) {
    const data = await lastValueFrom(this.http.get("assets/database/projects.json"));
    return JSON.parse(JSON.stringify(data))[projectName];
  }
}
