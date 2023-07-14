const FARBA = {
  WH: window.innerHeight,

  WW: document.documentElement.clientWidth,

  isTouch: 'ontouchstart' in window || navigator.msMaxTouchPoints,

  //lazy load для сторонних либ
  lazyLibraryLoad(scriptSrc, linkHref, callback) {
    let script;
    const domScript = document.querySelector(`script[src="${scriptSrc}"]`);
    const domLink = document.querySelector(`link[href="${linkHref}"]`);

    if (!domScript) {
      script = document.createElement("script");
      script.src = scriptSrc;
      document.querySelector("#wrapper").after(script);
    }

    if (linkHref !== "" && !domLink) {
      let style = document.createElement("link");
      style.href = linkHref;
      style.rel = "stylesheet";
      document.querySelector("link").before(style);
    }

    if (!domScript) {
      script.onload = callback;
    } else {
      domScript.onload = callback;
    }
  }
};


(function() {
  ymaps.ready(init);

  function init() {
    // Создание карты
    const map = new ymaps.Map(
      "map",
      {
      center: [55.729690, 37.461860],
      zoom: 17,
      controls: [],  
      type: 'yandex#map', 
    }, 
    {
      scrollZoom: false,
    }
  );

  window.addEventListener('resize', function() {
    if (window.innerWidth < 1366) {
        map.setCenter([55.7301509370965, 37.4586638207038], 18);
    }
    if (window.innerWidth < 768) {
        map.setCenter([55.729787827833874, 37.45786724529712], 18);
    }
});

 
  // Отключение перетаскивания и прокрутки карты
  map.behaviors.disable(["drag", "scrollZoom"]);

  // Создание метки с пользовательской иконкой
  const myPlacemark = new ymaps.Placemark(
    [55.730507, 37.457825], // координаты метки
    {
      hintContent: "Столичная диагностика", // подсказка при наведении на метку
      balloonContent: "Столичная диагностика", // содержимое балуна при клике на метку
    },
    {
      iconLayout: "default#image", // тип макета иконки
      iconImageHref: "./images/Location.svg", // ссылка на изображение иконки
      iconImageSize: [53, 76], // размер иконки в пикселях
      // iconImageOffset: [-15, -42], // смещение иконки относительно точки привязки
    }
  );

  // Добавление метки на карту
  map.geoObjects.add(myPlacemark);
}
})();

(function () {
  if (!document.querySelector('.header-nav ul li:nth-child(1) a') || !document.querySelector('.appointment')) return


  document.querySelector('.header-nav ul li:nth-child(1) a').addEventListener('click', (e) => {
    e.preventDefault()

    document.querySelector('.appointment').scrollIntoView({behavior: "smooth"})
  })
})();

(function () {
  if (!document.querySelector('.header-nav ul li:nth-child(2) a') || !document.querySelector('.know')) return


  document.querySelector('.header-nav ul li:nth-child(2) a').addEventListener('click', (e) => {
    e.preventDefault()

    document.querySelector('.know').scrollIntoView({behavior: "smooth"})
  })
})();

(function () {
  if (!document.querySelector('.header-nav ul li:nth-child(3) a') || !document.querySelector('.about')) return


  document.querySelector('.header-nav ul li:nth-child(3) a').addEventListener('click', (e) => {
    e.preventDefault()

    document.querySelector('.about').scrollIntoView({behavior: "smooth"})
  })
})();

(function () {
  if (!document.querySelector('.header-nav ul li:nth-child(4) a') || !document.querySelector('.map')) return


  document.querySelector('.header-nav ul li:nth-child(4) a').addEventListener('click', (e) => {
    e.preventDefault()

    document.querySelector('.map').scrollIntoView({behavior: "smooth"})
  })
})();

(function () {
  if (!document.querySelector('.header-contact .ui-btn') || !document.querySelector('.appointment-make')) return


  document.querySelector('.header-contact .ui-btn').addEventListener('click', (e) => {
    console.log('click');
    e.preventDefault()

    document.querySelector('.appointment-make').scrollIntoView({behavior: "smooth"})
  })
})();







// стилизация селекта
// (function() {
//   if(!document.querySelector('.screen-plans-select select')) return

//   $('.screen-plans-select select').styler();
// })()





$(document).ready(function () {
  $("form.appointment-make-form").validate({
    submitHandler: function(form, event) {    
      event.preventDefault()
      form.reset()       
    },
    rules: {
      appointment_name: {
        required: true,
      },
      appointment_phone: {       
        required: true,      
      },      
    },
    messages: {
      appointment_name: "Пожалуйста, заполните это поле",   
      appointment_phone: {
        required: "Пожалуйста, заполните это поле",
        phone: "Пожалуйста, введите корректный номер телефона"
      }
    }
  });
});

$(document).ready(function () {
  $("#appointment_phone").inputmask("+7(999)-999-9999", { showMaskOnHover: false });
});

// бургер-меню
(function() {
  if(!document.querySelector('.burger-btn') || !document.querySelector('.header-nav ul')) return

  const menuBtn = document.querySelector('.burger-btn');
  const menu = document.querySelector('.header-nav ul');

  menuBtn.addEventListener('click', openMenu);

  function openMenu() {
    menu.classList.toggle('active')
    document.querySelector('.burger-btn span').classList.toggle('active')
    document.querySelector('.header-logo').classList.toggle('active')
    document.querySelector('.header-contact').classList.toggle('active')
  }
})();
