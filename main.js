var centi = 0;
        var mili = 0;
        var sec = 0;
        var sec_;
        var afficher;
        var compteur;

        // affichage du compteur à 0
        document.getElementById('time').innerHTML = "0" + sec + ":" + "0" + mili;


        
        function chrono() {
            setInterval(function (){
                mili++;
                    if (mili > 9) {
                        mili = 0;
                    }
            }, 1);
            
            centi++;
            centi*10;
            if (centi > 9) {
                centi = 0;
                sec++;
            }  

            if (sec < 10) {
                sec_ = "0" + sec;
            }
            else {
                sec_ = sec;
            }
                
            afficher = sec_ + ":" + centi + mili;
            document.getElementById("time").innerHTML = afficher;
            
            reglage = window.setTimeout("chrono();",100);
        } 
        
        
        function debut()  //== Activation et désactivation des boutons
            {
                    document.parametre.lance = "";
                    document.parametre.pause = "";
                    document.parametre.intermediaire = "";
                    document.parametre.rappel = "";
            }
        function arret() 
            {	
                    window.clearTimeout(reglage);
                    document.parametre.lance = "";
                    document.parametre.pause = "";
                    document.parametre.intermediaire = "";
                    document.parametre.rappel = "";
            }
            
        function raz() //====pour remettre à zéro
            { 
                    document.parametre.zero = "";
                    document.parametre.intermediaire = "";
                    document.parametre.rappel = "";
                    centi = 0;
                    mili = 0;
                    sec = 0;
                    compteur = "aucun temps intermediaire enregistré";
                    afficher = sec + "0:" + centi + mili;	
                    document.getElementById("time").innerHTML = afficher;
                    document.getElementById('presenter').style.visibility='hidden';
                    document.getElementsByName('intermediaire')[0].style.backgroundColor = 'rgba(50,205,50, 0.25)';
            }
            
        function inter() //==== Pour afficher le temps intermédiaire
        {
            compteur = document.getElementById("time").innerHTML;
            document.getElementsByName('intermediaire')[0].style.backgroundColor = "orange";
        }

         function rappeler() {
            document.getElementById('presenter').style.visibility='visible';
            document.getElementById('interm').innerHTML = compteur;
            document.getElementsByName('intermediaire')[0].style.backgroundColor = 'rgba(50,205,50, 0.25)';
        }