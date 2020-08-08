
// You can write more code here

/* START OF COMPILED CODE */

class Dog extends Phaser.GameObjects.Container {
	
	constructor(scene, x, y) {
		super(scene, x, y);
		
		// fuzzyDog
		const fuzzyDog = scene.add.image(0, 0, "fuzzyDog");
		this.add(fuzzyDog);
		
		// hatDog
		const hatDog = scene.add.image(0, 0, "hatDog");
		hatDog.scaleX = 2.2633711484776784;
		hatDog.scaleY = 2.2633711484776784;
		this.add(hatDog);
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
