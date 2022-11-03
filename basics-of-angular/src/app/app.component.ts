import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Ivan';
  age = 20;
  image = 'https://img2.freepng.es/20190123/jtv/kisspng-computer-icons-vector-graphics-person-portable-net-myada-baaranmy-teknik-servis-hizmetleri-5c48d5c2849149.051236271548277186543.jpg';
  btnDisabled = true;
  person = {
    name: 'Ivan',
    age: 20,
    avatar: 'https://img2.freepng.es/20190123/jtv/kisspng-computer-icons-vector-graphics-person-portable-net-myada-baaranmy-teknik-servis-hizmetleri-5c48d5c2849149.051236271548277186543.jpg'
  }
  names: string[] = ['julia', 'marta', 'andrea'];
  newName = '';

  thingsToDo = ['estudiar Angular', 'ir al gimnasio', 'recuperarse de una lesion'];
  newThingsToDo = '';

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge() {
    this.person.age += 1;
  }
  decreaseAge() {
    this.person.age -= 1;
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number) {
    this.names.splice(index, 1);
  }
  addThings() {
    this.thingsToDo.push(this.newThingsToDo);
    this.newThingsToDo = '';
  }
  deleteThings(index: number) {
  this.thingsToDo.splice(index, 1);
  }
}
