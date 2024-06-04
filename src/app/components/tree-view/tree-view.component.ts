import { Component, Renderer2 } from '@angular/core';
import { ParseService } from 'src/app/service/parse.service';
import { TreeViewService } from 'src/app/service/tree-view.service';
// import { groupedResultArray, GroupType } from 'src/seelectApp/parseFunction';
import { AwsType, Aws, HostGroup, GroupType } from 'src/app/types/types';

import cdu_prl1 from 'src/assets/initial data/Clients_ci-tw3-cdu-prl1.oiktest.local.json';
import cdu_prl2 from 'src/assets/initial data/Clients_ci-tw3-cdu-prl2.oiktest.local.json';
import kusenkov from 'src/assets/initial data/Clients_kuzenkovaay.monitel.local.json';
import matsevet from 'src/assets/initial data/Clients_matsevetskiylk.monitel.local.json';
import prosvet from 'src/assets/initial data/Clients_prosvetovdp.monitel.local.json';
import cdu_op1 from 'src/assets/initial data/Clients_qa-tw3-cdu-op1.oiktest.local.json';
import cdu_op2 from 'src/assets/initial data/Clients_qa-tw3-cdu-op2.oiktest.local.json';
import cdu_web1 from 'src/assets/initial data/Clients_qa-tw3-cdu-web1.oiktest.local.json';
import cdu_web2 from 'src/assets/initial data/Clients_qa-tw3-cdu-web2.oiktest.local.json';
import host_groups from 'src/assets/initial data/HostGroups_Platform.Win1.json';
import { ItemClickEvent } from 'devextreme/ui/box';

const allApps = [
  cdu_prl1,
  cdu_prl2,
  cdu_op1,
  cdu_op2,
  cdu_web1,
  cdu_web2,
  kusenkov,
  matsevet,
  prosvet,
] as AwsType[];

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
  providers: [TreeViewService],
})
export class TreeViewComponent {
  products: GroupType[];
  selectedElement?: HTMLElement;

  constructor(private parseService: ParseService, private renderer: Renderer2) {
    this.products = [];
  }

  ngOnInit(): void {
    const resultArray: Aws[] = this.parseService.parseFunction(allApps);
    const groupedResultArray: GroupType[] = this.parseService.groupResultArray(
      resultArray,
      host_groups as HostGroup[]
    );
    this.parseService.addAwsId(groupedResultArray);

    this.products = groupedResultArray;
  }

  selectItem(e: ItemClickEvent) {
    const currentElement = e.itemElement;
    const isElementsMatched = this.selectedElement === currentElement;
    const isElementHasClass =
      currentElement.classList.contains('me-state-selected');

    if (isElementHasClass && isElementsMatched) {
      this.renderer.removeClass(this.selectedElement, 'me-state-selected');
    } else {
      if (this.selectedElement)
        this.renderer.removeClass(this.selectedElement, 'me-state-selected');

      this.renderer.addClass(currentElement, 'me-state-selected');
    }

    this.selectedElement = currentElement;
  }

  getClass(icon: string): string {
    return `dx-icon-${icon}`;
  }
}
