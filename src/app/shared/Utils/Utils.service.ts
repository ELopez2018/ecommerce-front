import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public async wompiIntegritySignature(reference: string, amount: number, currency: string): Promise<string> {

    /* "<Referencia><Monto><Moneda><SecretoIntegridad>"
    Ejemplo
     const encondedText = new TextEncoder().encode(cadenaConcatenada);
     const hashBuffer = await crypto.subtle.digest("SHA-256", encondedText);
     const hashArray = Array.from(new Uint8Array(hashBuffer));
     const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join(""); */
    const cadenaConcatenada = `${reference}${amount}${currency}${environment.WOMPI_INTEGRITY_KEY}`;
    const encondedText = new TextEncoder().encode(cadenaConcatenada);
    const hashBuffer = await crypto.subtle.digest("SHA-256", encondedText);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return hashHex
  }

  public getCodeReference() {
    return `${Date.now()}-web`
  }

}
