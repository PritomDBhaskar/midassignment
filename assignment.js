// Inch to feet

function inchToFeet(inch){
    let feet = inch/12;
    let remainder = inch%12;
    
    if(remainder == 0){
        console.log(Math.round(feet)+" feet");
        return feet;
    }
    else{
        console.log(Math.round(feet)+" feet and "+remainder+" inch");
        return feet;
    }
}

// Feet to mile using inchToFeet value as argument

function feetToMile(feet) {    

    let mile = feet/5280;
    let remainder = feet%5280;

    if(remainder == 0){
        console.log(Math.round(mile)+" mile");
    }
    else{
        console.log(Math.round(mile)+" mile and "+Math.round(remainder)+" feet");
    }
    
} 

feetToMile(inchToFeet(63360));

// Wood Calculator

function woodCalculator(chair=0,table=0,bed=0) {
    let wood = 1;
    
    let woodNeededForChair = chair * wood;
    let woodNeededForTable = table * ( 3 * wood );
    let woodNeededForBed = bed * ( 5 * wood);

    let totatWoodNeeded = (woodNeededForChair + woodNeededForTable + woodNeededForBed);

    console.log(totatWoodNeeded+" cubic foot wood is needed.")
    
}


woodCalculator(5,2,1);

// Bric Calculator

function bricCalculator(buildingFloor) {

    let totalBrickNeeded;

    if (buildingFloor >1 && buildingFloor >= 10) {
        totalBrickNeeded =  (10*15*1000);
        if (buildingFloor >11 && buildingFloor >= 20) {
            totalBrickNeeded = totalBrickNeeded +  (10*12*1000);
            if(buildingFloor >20){
                totalBrickNeeded = totalBrickNeeded + ((buildingFloor-20)*10*1000);
                console.log(totalBrickNeeded);
            }
            else{
                console.log(totalBrickNeeded);
            }
        }
        else{
            totalBrickNeeded = totalBrickNeeded + ((buildingFloor-10)*12*1000);
            console.log(totalBrickNeeded);   
        }
    }
    else{
        totalBrickNeeded = buildingFloor*15*1000;
        console.log(totalBrickNeeded);
    }
}
    

bricCalculator(20);

// Friends Array

const friends =["Foysal","Dip","Rahat","Rayhan","Mamun"];

function smallestName() {
    var smallest = friends[0];
    var totalNames = friends.length;
    for (var i=0; i < totalNames; i++) {
        if (friends[i]< smallest) {
            smallest = friends[i];
        }
    }
    console.log(smallest);
}

smallestName.apply(this,friends);

// Rainy day scenario

let weather = "rainy";
let stayingHome = "yes";
let beef = "yes";

if(weather == "rainy"){
    console.log("I have to make a decison about going to office.");
    if(stayingHome == "yes"){
        console.log("I will mail my office that I am ill.");
        if(beef == "yes"){
            console.log("I will make kichuri and beef curry.")
        }
        else(
            console.log("I will make kichuri with an omlete")
        )
    }
    else{
        console.log("I will take an umbrella an will go to office");
    }
}
else{
    console.log("I will go to the office.");
}

