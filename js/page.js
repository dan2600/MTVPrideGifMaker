//Main Card Maker Function
function makeCard() {
    var images = [];
    var main = document.createElement('canvas');
    main.width = 470;
    main.height = 470;
    var ctx = main.getContext("2d");
    for (i = 0; i < 5; i++) {
        rainbowmaker(ctx, i);
        images.unshift(main.toDataURL("image/gif"));
    }
    gifshot.createGIF({
        gifWidth: 470,
        gifHeight: 470,
        images: images
    }, function(obj) {
        if (!obj.error) {
            var image = obj.image,
                animatedImage = document.createElement('img');
            animatedImage.src = image;
            document.getElementsByClassName("content")[0].appendChild(animatedImage);
        }
    });
    300

}

//Makes the Rainbow Effect and Applies Text
function rainbowmaker(context, shift) {
    words = ["Proud to Be", document.getElementById('p0').value + "&", document.getElementById('p1').value + "&", document.getElementById('p2').value + "&", document.getElementById('p3').value + "&", "ME"];
    colors = ["#f40000", "#ff8601", "#faf601", "#01881f", "#4600ff", "#830189"];
    n = colors.length;
    for (z = 0, j = 0 + shift; z < n; z++, j++) {
        if (j >= n) {
            j = 0;
        }
        res = (colors[j]);
        context.fillStyle = res;
        context.fillRect(0, 78.33 * z, 470, 78.33);
        context.fillStyle = "#000";
        context.font = "50px Arial";
        context.fillText(words[z], 25, (78.33 * (z + 1)) - 25);
    }
}
