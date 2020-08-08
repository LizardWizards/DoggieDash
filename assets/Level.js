
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	create() {
		
		// text_1
		const text_1 = this.add.text(400, 450, "", {});
		text_1.setOrigin(0.5, 0);
		text_1.text = "Welcome to Phaser Editor 2D!";
		text_1.setStyle({"fontSize":"30px","fontStyle":"bold"});
		
		// yard
		const yard = this.add.image(401, 291, "yard");
		yard.scaleX = 1.2415074331576714;
		yard.scaleY = 1.2415074331576714;
		
		// container_1
		const container_1 = this.add.container(51, 361);
		
		// dog1
		const dog1 = new Dog(this, 141, -224);
		container_1.add(dog1);
		
		// haircut_station
		const haircut_station = new Station(this, 649, -48);
		container_1.add(haircut_station);
		
		// bath_station
		const bath_station = new Station(this, 364, -61);
		container_1.add(bath_station);
		
		// cashier_station
		const cashier_station = new Station(this, 74, 76);
		container_1.add(cashier_station);
		
		// haircut_station (prefab fields)
		haircut_station.Type = "Haircut";
		
		// bath_station (prefab fields)
		bath_station.Type = "Bath";
		
		// cashier_station (prefab fields)
		cashier_station.Type = "Cashier";
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
