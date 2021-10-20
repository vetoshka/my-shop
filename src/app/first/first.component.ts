import { Component, OnInit, Optional } from '@angular/core';
import { ConfigOptionsService } from '../core/services/config-options.service';
import { constantsService } from '../core/services/constants.service';
import { GeneratorService } from '../core/services/generator.service';
import { LocalStorageService, shopLocalStorage } from '../core/services/local-storage.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(@Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private generatorService: GeneratorService, @Optional() private localStorageService: LocalStorageService
  ) { }
  ngOnInit(): void {
    console.log(constantsService);

    this.configOptionsService.setConfig( {id:1,login:"login"});

    console.log(this.configOptionsService.getConfig());

    console.log(this.generatorService.generate(4));
    shopLocalStorage.setData("key",{id:12})

  }
}
