import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  whatsappNumber = '917510552532';

openWhatsApp() {
  const message = "Hello I am interested in your product";
  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;

  window.open(url, '_blank');
}

}
