AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" }
  },
  init: function() {
    this.handleClickEvents();
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },
  handleClickEvents: function () {
    //Cursor 'click' Events
    this.el.addEventListener("click", evt => {
      const placesContainer = document.querySelector("#places-container");
      const { state } = placesContainer.getAttribute("tour");
      
      if (state === "places-list") {
        const id = this.el.getAttribute("id");
        const placesId = [
          "dubai", "singapore"
        ];
        if (placesId.includes(id)) {
          placesContainer.setAttribute("tour", {
            state: "view",
            selectedCard: id
          });
        }
      }
      /*const skyEl = document.querySelector("#main-container");
      skyEl.setAttribute("material", {
        src: `./assets/360_images/${id}/${title}.jpg`,
        color: "#fff"
      });*/
    });
  },
 handleViewState: function() {
    /*const el = this.el;

    const id = el.getAttribute("id");

    const placesContainer = document.querySelector("#places-container");

    const { selectedItemId } = placesContainer.getAttribute("cursor-listener");

    //Keeping all the images as id of the images with .jpg extension
    const sideViewPlacesId = ["place-1", "place-2"];

    if (sideViewPlacesId.includes(id)) {
      
      placesContainer.setAttribute("tour", {
        state: "change-view"
      });

      const skyEl = document.querySelector("#main-container");
      
      //Set the 360 degree image to the sky element.
      skyEl.setAttribute("material", {
        src: `./assets/360_images/${selectedItemId}/${id}.jpg`,
        color: "#fff"
      });
     
    }*/
  
  },
  handleMouseEnterEvents: function() {
    // Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
      const placeContainer = document.querySelector("#places-container");
      const { state } = placeContainer.getAttribute("tour");
      if (state === "places-list") {
        this.handlePlacesListState();
      }
    });
  },
  handlePlacesListState: function() {
    const id = this.el.getAttribute("id");
    const placesId = ["dubai", "singapore"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id
      });
      this.el.setAttribute("material", {
        color:"#fcf405",
        opacity: 1
      });
    }
  },
  handleMouseLeaveEvents: function() {
    // Mouse Leave Events
    this.el.addEventListener("mouseleave", () => {
      const placesContainer = document.querySelector("#places-container");
      const { state } = placesContainer.getAttribute("tour");
      if (state === "places-list") {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1
            });
          }
        }
      }
    });
  },
  
});