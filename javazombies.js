AFRAME.registerComponent("spawn", {

    init: function() {
        var posX=-50;
        var posY=-3;
        var posZ=-150;
        for(var i=1; i<=3; i++){
            var id="zom${i}";
            var position= {x:posX,y:posY,z:posZ};
            posX+=50;
            this.create_zom(id, position);
        }
    },
    create_zom: function( id, position){
        var scene=document.querySelector("a-scene");
        var zombientity=document.createElement("a-entity");
        zombientity.setAttribute("id",id )
        zombientity.setAttribute("position", position )
        zombientity.setAttribute("gltf-model", "#zombie")
        zombientity.setAttribute("scale", "10 10 10")
        zombientity.setAttribute("animation-mixer", {clip: "Walk"})
        zombientity.setAttribute("animation",{property: "position", to: "-10 0 1000", easing: "linear",loop:"true", dur:"60000" } )
        scene.appendChild(zombientity)
    }

})
