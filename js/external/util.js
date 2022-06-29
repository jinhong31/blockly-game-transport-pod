
Sonet = {
   am:{
      widgets: {},
      scorm: {
         PISA2025:{}
      },
      App: {
         RESOURCE_URL: "images/"
      }
   },
   Util: {

      showModal: function (cls, backdropHide, backdropRemove) {
         if($('.am-modal.' + cls).length!=0){
            $('body').addClass('modal-open');
            if (backdropHide === true) {
               $('body').addClass('modal-backdrop-hide');
            }
            if (backdropRemove === true) {
               $('.am-modal-backdrop').removeClass('in');
            } else {
               $('.am-modal-backdrop').addClass('in');
            }
            $('.am-modal.' + cls).addClass('in');
            $(document).trigger('showModal', [cls]);
         }
      },

      hideModal: function (cls) {
         cls = cls || null;
         if (cls != null && ('.am-modal.' + cls).length > 0) {
            $('.am-modal.' + cls).removeClass('in');

            // check if other modals exists, if not, then it's safe to remove the modal-open class and backdrop
            if($('.am-modal.in').length === 0){
               $('body').removeClass('modal-open modal-backdrop-hide');
               $('.am-modal-backdrop').removeClass('in');
            }       
         } else {    
            $('body').removeClass('modal-open modal-backdrop-hide');
            $('.am-modal.in').removeClass('in');
         }
         $(document).trigger('hideModal');
      },

      getTimeStamp: function () {
         return (new Date().getTime());
      },

      isEmpty: function (value) {
         value = $.trim(value);
   
         return value === '' || value === undefined || value === null;
      },
   }
};

/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

  // The base Class implementation (does nothing)
  this.Class = function(){};

  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;

    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;

    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;

            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];

            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);
            this._super = tmp;

            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }

    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }

    // Populate our constructed prototype object
    Class.prototype = prototype;

    // Enforce the constructor to be what we expect
    Class.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;

    return Class;
  };
})();
