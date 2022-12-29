import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  @ViewChild('reset') reset!: any;
  numero: number = 0;
  aleatorio = 0;
  rei: boolean = false
  

  lanzar(){
    this.aleatorio = Math.round(Math.random()*6);
  }
  reiniciar(){
    this.reset.nativeElement.value = this.lanzar
  }

}
