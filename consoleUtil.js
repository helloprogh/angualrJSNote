var consoleUtil = {};

(function(consoleUtil){
    function moduleCon(stepName) {
        console.log("%c模块" + stepName, "background-color: #yellow");
    }

    consoleUtil.moduleCon = moduleCon;
})(consoleUtil)