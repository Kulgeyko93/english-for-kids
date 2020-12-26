// import { Cards } from './../Cards/Cards.js';
import { Main } from './../Main/Main.js';
import { RightMenu } from './../RightMenu/RightMenu.js';
import { TrainMode } from './../TrainMode/TrainMode.js';
import { Stats } from './../Stats/Stats.js';

// todo active menu start category

export class App {
   constructor () {
      this.menuList = document.querySelectorAll('.link');
      this.trainModeActive = false;
      this.activeCategory = false;

      this._initMain();
      this._initRightMenu(this.cardActive);
      this._initStats ();


      
   }

   _initCards () {
      this.cards = new Cards()
   }
   _initMain () {
      this.ain = new Main({activeCategory: this.activeCategory})
      
   }

   _initRightMenu () {
      this.rightMenu = new RightMenu({activeCategory: this.activeCategory})
   }
   _initStats () {
      this.stats = new Stats()
   }
}