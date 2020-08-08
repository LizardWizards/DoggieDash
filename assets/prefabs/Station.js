
// You can write more code here

/* START OF COMPILED CODE */

class Station extends Phaser.GameObjects.Container {
	
	constructor(scene, x, y) {
		super(scene, x, y);
		
		// table
		const table = scene.add.image(0, 0, "table");
		this.add(table);
		
		// Bath
		const bath = scene.add.image(0, 0, "tub");
		this.add(bath);
		
		// Haircut
		const haircut = scene.add.image(0, 14, "dog table.jpeg");
		this.add(haircut);
		
		/** @type {string} */
		this.Type = "";
		
		/* START-USER-CTR-CODE */
		this.printy();
		/* END-USER-CTR-CODE */
	}
	
	/* START-USER-CODE */

	// Write your code here.
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

Station.prototype.printy = function(){
	console.log("H")
};




