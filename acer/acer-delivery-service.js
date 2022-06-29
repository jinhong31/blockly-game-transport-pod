/**
 * Service to help the PISA items work with Delivery Client via the HTML5
 * Interactive Asset custom element
 */
window.ACERDeliveryService = new class {
  
  constructor() {
    this.itemId = null;
  }


  /**
   * Listen to events, next & previous button, so Delivery can capture the
   * response
   */
   registerDomEvents() {
    document.querySelectorAll('button.g-next').forEach((btnEl) => {
      btnEl.addEventListener('click', () => {
        window.ACERInteractiveAsset.emitEvent({
          type: 'goto-next',
          itemId: this.itemId
       });
      });
    });
    document.querySelectorAll('button.g-previous').forEach((btnEl) => {
      btnEl.addEventListener('click', () => {
        window.ACERInteractiveAsset.emitEvent({
          type: 'goto-prev',
          itemId: this.itemId
       });
      });
    });
  }


  listenToInteractiveAssetEvents() {
    window.ACERInteractiveAsset.listenToGetAssetData((done) => {
      // get the asset data for the current item being displayed
      var data = Sonet.am.scorm.ItemManager.getState();
      done(JSON.parse(data));
    });
    window.ACERInteractiveAsset.listenToSetAssetData((data) => {
      if (!data) return;
      if (data.response === "") {
        Sonet.am.scorm.ItemManager.setState("");
      } else {
        var dataStr = JSON.stringify(data.response);
        Sonet.am.scorm.ItemManager.setState(dataStr);
      }
    });
  }


  fireItemLoadedEvent() {
    window.ACERInteractiveAsset.emitEvent({
      type: 'item-loaded',
      itemId: this.itemId
    });
  }


  /**
   * Setup the communication between the interactive asset item and delivery
   * client
   *
   * @param {*} itemId
   */
  init(itemId) {
    this.itemId = itemId;
    if (window.frameElement) {
      window.frameElement.addEventListener('load', () => {
        // we can only execute this once the iFrame load event has fired
        this.listenToInteractiveAssetEvents();
        this.fireItemLoadedEvent();
      });
    }
  }
};
