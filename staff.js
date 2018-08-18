

class Staff{
	constructor(currentHotel){
		this.busy = false;
		this.hotel = currentHotel;
	}
	handleKitchenRequest( food, room ){
		setTimeout(completeKitchenRequest, (Math.floor(Math.random() * 3000), room);
		//wait a random time up to 30 seconds and then call the staff's complete
		this.busy = true;
	}
	completeKitchenRequest ( room ) {
        //set the room’s occupant’s isHungry to false
		room.occupant.ishungry = false;
	}

}