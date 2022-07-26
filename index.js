const font_beauty = (options) => {


    {
        color: "text-bloody"
        decoration: "decorate-line-below"

    }


    //target all of the elements that have the class of the package
    let targeted_items = document.querySelectorAll('.beautify-font');


    //create style based on user selected values
    if (options.color === "boody") { //colors
        options.color = "red";
    } else if (options.color === "sky") {
        options.color = "blue";
    }

    if (options.decoration)


        targeted_items.forEach((ele) => {

        if (options.color) {
            ele.style.color = options.color;
        }

    })
}