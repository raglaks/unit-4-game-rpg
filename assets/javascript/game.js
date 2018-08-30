var fighters = {
    go: {
        name: "gorilla",
        hp: "200",
        attack: 50,
        counter: 25
    },

    octo: {
        name: "octopus",
        hp: "180",
        attack: 30,
        counter: 15
    },

    croco: {
        name: "crocodile",
        hp: "130",
        attack: 60,
        counter: 30
    },

    shark: {
        name: "shark",
        hp: "220",
        attack: 40,
        counter: 20
    }
}



$(document).ready(function () {

    function attackO() {
        console.log(fighters.go.hp);
        var attack = fighters.go.attack;
        var enemyAttack = fighters.octo.counter;
        var hp = fighters.go.hp;
        var enemyHp = fighters.octo.hp;

        $("#attack").on("click", function () {
            hp = hp - enemyAttack;
            console.log(hp);
            enemyHp = enemyHp - attack;
            attack = attack * 2;
            console.log("attack val is:" + attack);
            console.log(enemyHp);

            if (hp <= 0) {
                $("#yourChar").html("<h1>YOU LOSE</h1>");
                $("#yourChar").append("<button type='button' class='btn btn-danger' id='restart'>Restart</button>");
                $("#attack").remove();
            } else if (enemyHp <= 0) {
                $("#defender").html("<h1>YOU WIN, CHOOSE ANOTHER ENEMY</h1>");
                $("#attack").remove();
            }
        })
    }

    function attackC() {
        console.log(fighters.go.hp);
        var attack = fighters.go.attack;
        var enemyAttack = fighters.croco.counter;
        var hp = fighters.go.hp;
        var enemyHp = fighters.croco.hp;

        $("#attack").on("click", function () {
            hp = hp - enemyAttack;
            console.log(hp);
            enemyHp = enemyHp - attack;
            attack = attack * 2;
            console.log("attack val is:" + attack);
            console.log(enemyHp);

            if (hp <= 0) {
                $("#yourChar").html("<h1>YOU LOSE</h1>");
                $("#yourChar").append("<button type='button' class='btn btn-danger' id='restart'>Restart</button>");
                $("#attack").remove();
            } else if (enemyHp <= 0) {
                $("#defender").html("<h1>YOU WIN, CHOOSE ANOTHER ENEMY</h1>");
                $("#attack").remove();
            }
        })
    }

    function attackS() {
        console.log(fighters.go.hp);
        var attack = fighters.go.attack;
        var enemyAttack = fighters.shark.counter;
        var hp = fighters.go.hp;
        var enemyHp = fighters.shark.hp;

        $("#attack").on("click", function () {
            hp = hp - enemyAttack;
            console.log(hp);
            enemyHp = enemyHp - attack;
            attack = attack * 2;
            console.log("attack val is:" + attack);
            console.log(enemyHp);

            if (hp <= 0) {
                $("#yourChar").html("<h1>YOU LOSE</h1>");
                $("#yourChar").append("<button type='button' class='btn btn-danger' id='restart'>Restart</button>");
                $("#attack").remove();
            } else if (enemyHp <= 0) {
                $("#defender").html("<h1>YOU WIN, CHOOSE ANOTHER ENEMY</h1>");
                $("#attack").remove();
            }
        })
    }

    $("#1").on("click", function () {
        console.log("hey");
        $("#1").remove();
        $("#2").remove();
        $("#3").remove();
        $("#4").remove();
        $("#yourChar").append("<img src='assets/images/gorilla.png' alt='first pic' id='go'/>");
        $("#enemies").append("<img src='assets/images/octopus.png' alt='second pic' id='octo'/>");
        $("#enemies").append("<img src='assets/images/croco.png' alt='third pic' id='croco'/>");
        $("#enemies").append("<img src='assets/images/shark.png' alt='fourth pic' id='shark'/>");
        $("#octo").on("click", function () {
            $("#octo").remove();
            $("#defender").append("<img src='assets/images/octopus.png' alt='second pic' id='octo'/>");
            $("#yourChar").append("<button type='button' class='btn btn-danger' id='attack'>Attack!</button>");
            attackO();
        });
        $("#croco").on("click", function () {
            $("#croco").remove();
            $("#defender").append("<img src='assets/images/croco.png' alt='second pic' id='octo'/>");
            $("#yourChar").append("<button type='button' class='btn btn-danger' id='attack'>Attack!</button>");
            attackC();
        });
        $("#shark").on("click", function () {
            $("#shark").remove();
            $("#defender").append("<img src='assets/images/shark.png' alt='second pic' id='octo'/>");
            $("#yourChar").append("<button type='button' class='btn btn-danger' id='attack'>Attack!</button>");
            attackS();
        });

    })

    $("#2").on("click", function () {
        console.log("hey");
        $("#1").remove();
        $("#2").remove();
        $("#3").remove();
        $("#4").remove();
        $("#yourChar").append("<img src='assets/images/octopus.png' alt='first pic' id='octo'/>");
        $("#enemies").append("<img src='assets/images/gorilla.png' alt='second pic' id='go'/>");
        $("#enemies").append("<img src='assets/images/croco.png' alt='third pic' id='croco'/>");
        $("#enemies").append("<img src='assets/images/shark.png' alt='fourth pic' id='shark'/>");
    })

    $("#3").on("click", function () {
        console.log("hey");
        $("#1").remove();
        $("#2").remove();
        $("#3").remove();
        $("#4").remove();
        $("#yourChar").append("<img src='assets/images/croco.png' alt='first pic' id='croco'/>");
        $("#enemies").append("<img src='assets/images/gorilla.png' alt='second pic' id='go'/>");
        $("#enemies").append("<img src='assets/images/octopus.png' alt='third pic' id='octo'/>");
        $("#enemies").append("<img src='assets/images/shark.png' alt='fourth pic' id='shark'/>");
    })

    $("#4").on("click", function () {
        console.log("hey");
        $("#1").remove();
        $("#2").remove();
        $("#3").remove();
        $("#4").remove();
        $("#yourChar").append("<img src='assets/images/shark.png' alt='first pic' id='shark'/>");
        $("#enemies").append("<img src='assets/images/gorilla.png' alt='second pic' id='go'/>");
        $("#enemies").append("<img src='assets/images/octopus.png' alt='third pic' id='octo'/>");
        $("#enemies").append("<img src='assets/images/croco.png' alt='fourth pic' id='croco'/>");
    })


});