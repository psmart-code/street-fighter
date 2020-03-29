var fightPosition="images/fight_instance.gif";
var spiningKick="https://orig00.deviantart.net/ccb3/f/2012/232/7/c/ryu_hd_tatsumaki_senpukyaku_by_juniorbunny-d5bui4g.gif";
var hadouken="images/hadouken.gif";
var shoryuken="images/shoryuken.gif";
var crossPunch="images/cross_punch.gif";
var yopChagui="images/yop_chagui.gif";
var bodyUppercut="images/uppercut_hepatic.gif";
var jab="images/jab.gif";
var didollyoChagui="images/didollyo_chagui.gif";
var lowPiChagui="images/pi_chagui_low.gif";
var chinUppercut="images/uppercut_chin.gif";
var apchagui="images/ap_chagui.gif";
var splash="images/street_fighter_splash.gif"

function sleep(ms) {
            setTimeout(function(){
                document.getElementById("fightTechnique").src=fightPosition;
            }, ms);
}        

        
        document.onkeypress = function(a){

            var key=String.fromCharCode(a.which);

            if(key=="w"){
                document.getElementById("fightTechnique").src=yopChagui;
                sleep(1000);
            }
            if(key=="e"){
                document.getElementById("fightTechnique").src=bodyUppercut;
                sleep(650);
            }
            if(key=="s"){
                document.getElementById("fightTechnique").src=jab;
                sleep(650);
            }
            if(key=="d"){
                document.getElementById("fightTechnique").src=didollyoChagui;
                sleep(800);
            }
            if(key=="r"){
                document.getElementById("fightTechnique").src=lowPiChagui;
                sleep(400);
            }
            if(key=="f"){
                document.getElementById("fightTechnique").src=hadouken;
                sleep(5000);
            }
            if(key=="t"){
                document.getElementById("fightTechnique").style.height="500px";
                document.getElementById("fightTechnique").src=shoryuken;
                sleep(1000);
                document.getElementById("fightTechnique").style.height="90px";
            }
            if(key=="g"){
                document.getElementById("fightTechnique").src=chinUppercut;
                sleep(650);
            }
            if(key=="y"){
                document.getElementById("fightTechnique").src=crossPunch;
                sleep(650);
                
            }
            if(key=="h"){
                document.getElementById("fightTechnique").src=apchagui;
                sleep(650);
                
            }
            if(a.key=="Enter"){
                document.getElementById("fightTechnique").src=fightPosition;
                
                document.getElementById("splash").hidden="true";
                document.getElementById("fightTechnique").removeAttribute("hidden");
                
            }
            
            

        }

