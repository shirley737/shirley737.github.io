
AFRAME.registerComponent('markerhandler', {

    init: function() {
        const a = document.querySelector("#test");
        const aEntity = document.querySelector("#test");

        // every click, we make our model grow in size :)
        a.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            const scale = aEntity.getAttribute('scale');
            Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity.setAttribute('scale', scale);
            }
        );
}});