var CaptainDirgoHome = function() {

    var scope = this;

    //

    var parentContainer = document.getElementById("captaindirgo-content__home");
    var homeItemContainer = document.getElementById("captaindirgo-home-card-container");

    //

    function reset() {
        homeItemContainer.innerText = "";
    };

    function loadData() {
        //Perform request to get notifications
        performRequest({
            method: 'GET',
            url: 'https://captaindirgo.com?fmt=json'
        }, function(error, data) {
            //Must be object
            if (!data || !isObject(data)) return;

            var blocks = data.commentUrls;
            if (!blocks || !isArray(blocks)) return;

            reset();

            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                var node = newTab.classes.modules.captaindirgo.index.getCaptainDirgoItem(block);
                if (!node) continue;
                homeItemContainer.appendChild(node);
            };
        });
    };

    //

    scope.show = function() {
        parentContainer.classList.remove("hidden");

        loadData();
    };

    scope.hide = function() {
        parentContainer.classList.add("hidden");
    };
};
