var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiatiors!");

    //player attack
    enemyHealth -= playerAttack;
    console.log(playerName + " attacked " + enemyName + " for " + playerAttack + "! " + enemyName + " has " + enemyHealth + " left!");
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } 
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //enemy attack
    playerHealth -= enemyAttack;
    console.log(enemyName + " attacked " + playerName + " for " + enemyAttack + "! " + playerName + " has " + playerHealth + " left!");

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } 
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}


fight();