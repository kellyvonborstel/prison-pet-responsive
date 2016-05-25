// added click handler to prevent images from disappearing on ios

$(function() {

  $('.js-donate-home').on({
    mouseenter: function() {
      $('.js-donate-home').attr('src', 'images/donate-blue-dark.svg');
    },
    mouseleave: function() {
      $('.js-donate-home').attr('src', 'images/donate-blue.svg');
    },
    click: function() {
      $('.js-donate-home').attr('src', 'images/donate-blue.svg');
    }
  });

  $('.js-donate').on({
    mouseenter: function() {
      $('.js-donate').attr('src', '../images/donate-blue-dark.svg');
    },
    mouseleave: function() {
      $('.js-donate').attr('src', '../images/donate-blue.svg');
    },
    click: function() {
      $('.js-donate').attr('src', '../images/donate-blue.svg');
    }
  });

  $('.js-boarding-home').on({
    mouseenter: function() {
      $('.js-boarding-home').attr('src', 'images/boarding-blue-dark.svg');
    },
    mouseleave: function() {
      $('.js-boarding-home').attr('src', 'images/boarding-blue.svg');
    },
    click: function() {
      $('.js-boarding-home').attr('src', 'images/boarding-blue.svg');
    }
  });

  $('.js-boarding').on({
    mouseenter: function() {
      $('.js-boarding').attr('src', '../images/boarding-blue-dark.svg');
    },
    mouseleave: function() {
      $('.js-boarding').attr('src', '../images/boarding-blue.svg');
    },
    click: function() {
      $('.js-boarding').attr('src', '../images/boarding-blue.svg');
    }
  });

  $('.js-calendar-home').on({
    mouseenter: function() {
      $('.js-calendar-home').attr('src', 'images/calendar-blue-dark.svg');
    },
    mouseleave: function() {
      $('.js-calendar-home').attr('src', 'images/calendar-blue.svg');
    },
    click: function() {
      $('.js-calendar-home').attr('src', 'images/calendar-blue.svg');
    }
  });

  $('.js-calendar').on({
    mouseenter: function() {
      $('.js-calendar').attr('src', '../images/calendar-blue-dark.svg');
    },
    mouseleave: function() {
      $('.js-calendar').attr('src', '../images/calendar-blue.svg');
    },
    click: function() {
      $('.js-calendar').attr('src', '../images/calendar-blue.svg');
    }
  });

  $('.js-facebook-home').on({
    mouseenter: function() {
      $('.js-facebook-home').attr('src', 'images/facebook-blue-dark.svg');
    },
    mouseleave: function() {
      $('.js-facebook-home').attr('src', 'images/facebook-blue.svg');
    },
    click: function() {
      $('.js-facebook-home').attr('src', 'images/facebook-blue.svg');
    }
  });

  $('.js-facebook').on({
    mouseenter: function() {
      $('.js-facebook').attr('src', '../images/facebook-blue-dark.svg');
    },
    mouseleave: function() {
      $('.js-facebook').attr('src', '../images/facebook-blue.svg');
    },
    click: function() {
      $('.js-facebook').attr('src', '../images/facebook-blue.svg');
    }
  });

  $('.js-twitter-home').on({
    mouseenter: function() {
      $('.js-twitter-home').attr('src', 'images/twitter-blue-dark.svg');
    },
    mouseleave: function() {
      $('.js-twitter-home').attr('src', 'images/twitter-blue.svg');
    },
    click: function() {
      $('.js-twitter-home').attr('src', 'images/twitter-blue.svg');
    }
  });

  $('.js-twitter').on({
    mouseenter: function() {
      $('.js-twitter').attr('src', '../images/twitter-blue-dark.svg');
    },
    mouseleave: function() {
      $('.js-twitter').attr('src', '../images/twitter-blue.svg');
    },
    click: function() {
      $('.js-twitter').attr('src', '../images/twitter-blue.svg');
    }
  });

  $('.js-facebook-footer-home').on({
    mouseenter: function() {
      $('.js-facebook-footer-home').attr('src', 'images/facebook-red.svg');
    },
    mouseleave: function() {
      $('.js-facebook-footer-home').attr('src', 'images/facebook-white.svg');
    },
    click: function() {
      $('.js-facebook-footer-home').attr('src', 'images/facebook-white.svg');
    }
  });

  $('.js-facebook-footer').on({
    mouseenter: function() {
      $('.js-facebook-footer').attr('src', '../images/facebook-red.svg');
    },
    mouseleave: function() {
      $('.js-facebook-footer').attr('src', '../images/facebook-white.svg');
    },
    click: function() {
      $('.js-facebook-footer').attr('src', '../images/facebook-white.svg');
    }
  });

  $('.js-twitter-footer-home').on({
    mouseenter: function() {
      $('.js-twitter-footer-home').attr('src', 'images/twitter-red.svg');
    },
    mouseleave: function() {
      $('.js-twitter-footer-home').attr('src', 'images/twitter-white.svg');
    },
    click: function() {
      $('.js-twitter-footer-home').attr('src', 'images/twitter-white.svg');
    }
  });

  $('.js-twitter-footer').on({
    mouseenter: function() {
      $('.js-twitter-footer').attr('src', '../images/twitter-red.svg');
    },
    mouseleave: function() {
      $('.js-twitter-footer').attr('src', '../images/twitter-white.svg');
    },
    click: function() {
      $('.js-twitter-footer').attr('src', '../images/twitter-white.svg');
    }
  });

  $('.js-linkedin-footer-home').on({
    mouseenter: function() {
      $('.js-linkedin-footer-home').attr('src', 'images/linkedin-dark.svg');
    },
    mouseleave: function() {
      $('.js-linkedin-footer-home').attr('src', 'images/linkedin.svg');
    },
    click: function() {
      $('.js-linkedin-footer-home').attr('src', 'images/linkedin.svg');
    }
  });

  $('.js-linkedin-footer').on({
    mouseenter: function() {
      $('.js-linkedin-footer').attr('src', '../images/linkedin-dark.svg');
    },
    mouseleave: function() {
      $('.js-linkedin-footer').attr('src', '../images/linkedin.svg');
    },
    click: function() {
      $('.js-linkedin-footer').attr('src', '../images/linkedin.svg');
    }
  });

});


(function(window) {

  'use strict';

  /**
   * Extend Object helper function.
   */
  function extend(a, b) {
    for(var key in b) { 
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  /**
   * Each helper function.
   */
  function each(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
      var item = collection[i];
      callback(item);
    }
  }

  /**
   * Menu Constructor.
   */
  function Menu(options) {
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  /**
   * Menu Options.
   */
  Menu.prototype.options = {
    wrapper: '#o-wrapper',          // The content wrapper
    type: 'slide-left',             // The menu type
    menuOpenerClass: '.button',   // The menu opener class names (i.e. the buttons)
    maskId: '#mask'               // The ID of the mask
  };

  /**
   * Initialise Menu.
   */
  Menu.prototype._init = function() {
    this.body = document.body;
    this.wrapper = document.querySelector(this.options.wrapper);
    this.mask = document.querySelector(this.options.maskId);
    this.menu = document.querySelector('#menu-' + this.options.type);
    this.closeBtn = this.menu.querySelector('.menu-close');
    this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);
    this._initEvents();
  };

  /**
   * Initialise Menu Events.
   */
  Menu.prototype._initEvents = function() {
    // Event for clicks on the close button inside the menu.
    this.closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));

    // Event for clicks on the mask.
    this.mask.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));
  };

  /**
   * Open Menu.
   */
  Menu.prototype.open = function() {
    this.body.classList.add('has-active-menu');
    this.wrapper.classList.add('has-' + this.options.type);
    this.menu.classList.add('is-active');
    this.mask.classList.add('is-active');
    this.disableMenuOpeners();
  };

  /**
   * Close Menu.
   */
  Menu.prototype.close = function() {
    this.body.classList.remove('has-active-menu');
    this.wrapper.classList.remove('has-' + this.options.type);
    this.menu.classList.remove('is-active');
    this.mask.classList.remove('is-active');
    this.enableMenuOpeners();
  };

  /**
   * Disable Menu Openers.
   */
  Menu.prototype.disableMenuOpeners = function() {
    each(this.menuOpeners, function(item) {
      item.disabled = true;
    });
  };

  /**
   * Enable Menu Openers.
   */
  Menu.prototype.enableMenuOpeners = function() {
    each(this.menuOpeners, function(item) {
      item.disabled = false;
    });
  };

  /**
   * Add to global namespace.
   */
  window.Menu = Menu;

})(window);

var slideRight = new Menu({
  wrapper: '#o-wrapper',
  type: 'slide-right',
  menuOpenerClass: '.button',
  maskId: '#mask'
});

var slideRightBtn = document.querySelector('#button-slide-right');

slideRightBtn.addEventListener('click', function(e) {
  e.preventDefault();
  slideRight.open();
});
