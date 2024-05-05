import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {
  constructor(protected http: HttpClient) { }

  private chatGptUrl = "https://"
  generateResponse(inputText: string): Observable<any> {
    const apiKey = 'VOTRE_CLÉ_API'; // Remplacez par votre clé API ChatGPT
    const requestBody = {
      apiKey: apiKey,
      inputText: inputText
    };

    return this.http.post<any>(this.chatGptUrl, requestBody);
  }
}
