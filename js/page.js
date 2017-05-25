//Main Card Maker Function
function makeCard() {
    document.getElementsByClassName("result")[0].innerHTML = "";
    loader = document.createElement('img');
    loader.src = 'images/ring.svg';
    document.getElementsByClassName("result")[0].appendChild(loader);

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
            animatedImage.className += "resultgif";
            document.getElementsByClassName("result")[0].innerHTML = "";
            document.getElementsByClassName("result")[0].appendChild(animatedImage);
            document.getElementsByClassName("result")[0].appendChild(document.createElement("br"))
            var node = document.createElement("button"); // Create a <li> node
            var textnode = document.createTextNode("Download Image");
            node.appendChild(textnode);
            node.onclick = function() { downloadURI(image, "pride.gif") };
            node.className += "btn";
            document.getElementsByClassName("result")[0].appendChild(node);


        }
    });

}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

//Makes the Rainbow Effect and Applies Text
function rainbowmaker(context, shift) {
    function ander(s) {
        if (s !== "") {
            return "&";
        } else {
            return;
        }
    }

    words = ["Proud to Be", document.getElementById('p0').value + ander(document.getElementById('p0').value), document.getElementById('p1').value + ander(document.getElementById('p1').value), document.getElementById('p2').value + ander(document.getElementById('p2').value), document.getElementById('p3').value + ander(document.getElementById('p3').value), "standing with the LGBTQ community."];
    colors = ["#f40000", "#ff8601", "#faf601", "#01881f", "#4600ff", "#830189"];
    n = colors.length;
    for (z = 0, j = 0 + shift; z < n; z++, j++) {
        if (j >= n) {
            j = 0;
        }
        blockColor = (colors[j]);
        context.fillStyle = blockColor;
        context.fillRect(0, 78.33 * z, 470, 78.33);
        context.fillStyle = "#000";
        if (z === 5) {
            context.font = "26.5px Arial";
        } else {
            context.font = "50px Arial";
        }
        if(words[z] !== "undefined")
        {
            console.log(words[z]);
        context.fillText(words[z], 25, (78.33 * (z + 1)) - 25);
        }
    }
}
