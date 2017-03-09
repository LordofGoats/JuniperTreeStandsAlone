var Leaves= 0;
var Roots= 2;
var Trunk = 1;
var LeafUpgrade = 0;
var Water = 0;
var Glucose = 0;
//Root and Water Production
function AddRoot(number) { 
    var RootCost = Math.floor(10 * Math.pow(1.1, Roots));
    if (Glucose >= RootCost) {
        Roots = Roots + number;
        Glucose = Glucose - RootCost; 
        document.getElementById("Roots").innerHTML = Roots;
        document.getElementById("Glucose").innerHTML = Glucose;
    };
    var RootNextCost = Math.floor(10 * Math.pow(1.1, Roots));
    document.getElementById("RootCost").innerHTML = RootNextCost;
};
function AddWater() {
    Water += Roots * .5;
    document.getElementById("Water").innerHTML = Water;
};
//Trunk and Leaf and Glucose Production
function AddLength(number) { 
    var TrunkCost = Math.floor(10 * Math.pow(1.1, Trunk));
    if (Water >= TrunkCost) {
        Trunk = Trunk + number;
        Water = Water - TrunkCost;
        document.getElementById("Trunk").innerHTML = Trunk;
        document.getElementById("Water").innerHTML = Water;
    };
    var TrunkNextCost = Math.floor(10 * Math.pow(1.1, Trunk));
    document.getElementById("TrunkCost").innerHTML = TrunkNextCost;
};
function AddLeaf() {
    Leaves += Trunk * 2;
    document.getElementById("Leaves").innerHTML = Leaves;
};
function AddGlucose() {
    Glucose = Leaves * .75;
    document.getElementById("Glucose").innerHTML = Glucose;
};
/*
function AutoLeaf() {
    var LeafUpgradeCost = 100
    if (Water >= LeafUpgradeCost) {
        LeafUpgrade = LeafUpgrade + 1;
        Water = Water - LeafUpgradeCost;
    }
    document.getElementById("LeafUpgradeNumber").innerHTML = LeafUpgrade;
    document.getElementById("LeafUpgradeCost").innerHTML = LeafUpgradeCost;
}
*/
window.setInterval(function() {
    AddWater();
    AddLeaf();
    AddGlucose();
}, 1000);
