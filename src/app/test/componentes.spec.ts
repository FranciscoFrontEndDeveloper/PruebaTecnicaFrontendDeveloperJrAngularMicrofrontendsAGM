import { TestBed } from '@angular/core/testing';
import { TestUtilsModule } from './testUtils.module';

// Importa todos tus componentes
import { InfotableComponent } from '../components/infotable/infotable.component';
import { ButtoniconComponent } from '../components/buttonicon/buttonicon.component';
import { MainComponent } from '../components/main/main.component';
import { ButtonmainComponent } from '../components/buttonmain/buttonmain.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { FilterComponent } from '../components/filter/filter.component';
import { FormcreationComponent } from '../components/formcreation/formcreation.component';
import { GenerictableComponent } from '../components/generictable/generictable.component';
import { GifinitialComponent } from '../components/gifinitial/gifinitial.component';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { TableexpantComponent } from '../components/tableexpant/tableexpant.component';

const allComponents = [
  InfotableComponent,
  ButtoniconComponent,
  MainComponent,
  ButtonmainComponent,
  DialogComponent,
  FilterComponent,
  FormcreationComponent,
  GenerictableComponent,
  GifinitialComponent,
  PaginatorComponent,
  SidenavComponent,
  TableexpantComponent,
];

describe('Creación de componentes (suite dinámica)', () => {
  for (const comp of allComponents) {
    it(`debería crearse correctamente: ${comp.name}`, async () => {
      TestBed.resetTestingModule();

      await TestBed.configureTestingModule({
        imports: [TestUtilsModule, comp], // ✅ simplificado
      }).compileComponents();

      const fixture = TestBed.createComponent<any>(comp);
      fixture.detectChanges();
      expect(fixture.componentInstance).toBeTruthy();
    });
  }
});
