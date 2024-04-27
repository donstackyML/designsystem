import {
  Component,
  HostListener,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { DxPopupComponent } from 'devextreme-angular';

@Component({
  selector: 'me-popup',
  templateUrl: './me-popup.component.html',
  styleUrls: ['./me-popup.component.css'],
})
export class MePopupComponent {
  lorem500 =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto et nobis fugit voluptates, obcaecati atque odio debitis perferendis totam magnam sunt praesentium consequuntur, earum, corrupti vitae natus sint autem! Nemo architecto ea necessitatibus possimus itaque ab, quaerat quisquam porro? Reprehenderit eius labore animi eum delectus, enim corrupti consequuntur accusantium, facere officiis deleniti ex perspiciatis, optio facilis quaerat veritatis obcaecati ipsa eaque. Doloribus quisquam ipsa esse mollitia minus nobis est alias unde aliquid repellendus. Eaque fugit nisi quidem facilis, odio voluptas nulla quaerat voluptates nesciunt illo dolore quod esse, maiores doloribus dolorem eum officia. Aspernatur fuga veritatis minus maiores nam eaque amet distinctio eveniet dolorum, aliquid nobis ab ullam iste magni. Sit aliquid architecto optio fuga facilis quibusdam nobis laborum nihil, corporis fugiat ullam placeat, assumenda consequatur officiis dicta harum fugit eos, modi minima? Inventore nisi voluptates ex cupiditate asperiores amet nostrum sunt blanditiis veniam libero error adipisci voluptatem dicta quibusdam magni optio velit neque tempora facere impedit, enim provident quos sit sequi. Modi explicabo harum est. Accusamus obcaecati quaerat facilis earum natus aut blanditiis nam sint, quam similique qui corporis, necessitatibus commodi quibusdam perferendis dignissimos officiis excepturi iure consequatur molestiae deserunt quidem et laborum. Perspiciatis adipisci amet tenetur exercitationem repellat quod, vitae tempora molestiae eos deleniti sint error itaque. Debitis cum veritatis, distinctio at fuga pariatur quia blanditiis magnam aut sapiente accusamus commodi aperiam autem necessitatibus aliquid rerum itaque quam eius obcaecati! Deserunt consequatur expedita ea. Velit, pariatur vitae aperiam nostrum ex architecto culpa, quisquam eius asperiores excepturi optio nihil. Laudantium, fugiat molestiae ut perferendis sapiente adipisci, expedita neque aspernatur totam suscipit deserunt a fugit at quibusdam. Quaerat, amet repellendus quisquam praesentium, aspernatur ea molestias excepturi a, placeat ullam similique odit. Quae delectus voluptates, placeat pariatur vitae velit modi at ratione minima eum consectetur eos? Rerum qui voluptatibus magni est tenetur expedita iure, sit illum reiciendis sapiente consequatur dolorem dolores vero odio neque esse minima similique quaerat error maiores? Earum ex perspiciatis ipsum excepturi reprehenderit repellat optio, voluptatibus aut enim aliquid esse. Veniam aliquam et, cupiditate asperiores quasi quibusdam rem molestias consectetur ad autem deleniti a odio nulla voluptate nesciunt, eum perspiciatis illo mollitia aut temporibus quia optio veritatis vel. Magni eius impedit quae. Eum ut corporis dignissimos adipisci suscipit fugiat voluptas sapiente aut harum odit, temporibus ratione qui incidunt dolores necessitatibus laboriosam, deserunt iste ea provident vel id aperiam nihil, molestiae amet! Expedita pariatur assumenda sapiente laudantium cum! Harum iusto atque natus dolorem similique id iste, temporibus numquam sed libero praesentium officiis, enim facere unde molestias itaque saepe necessitatibus odio sapiente ut? Enim recusandae repudiandae illum voluptas iusto adipisci, aliquid placeat impedit cupiditate non velit et consectetur ducimus doloremque deserunt fuga earum distinctio itaque natus rerum. Amet nihil tempora maxime, aperiam illum veritatis magni, doloribus aspernatur quas pariatur velit facere nam provident consequatur laboriosam magnam reprehenderit doloremque saepe incidunt iste dolor, ab exercitationem. Laboriosam quisquam nam, assumenda sint, sequi nostrum quas necessitatibus dolorem sunt iusto corporis sit similique commodi. Veniam ab veritatis repellat, provident ex eveniet accusantium molestiae.';

  @ViewChildren(DxPopupComponent) popupList?: QueryList<DxPopupComponent>;

  showPopup = (popupIndex: number) => {
    if (this.popupList) {
      this.popupList.get(popupIndex)?.instance?.show();
    }
  };

  hidePopup(popupIndex: number) {
    if (this.popupList) {
      this.popupList.get(popupIndex)?.instance?.hide();
    }
  }
}
