const product = {
  plainBurger: {
    name: 'GAMBURGER',
    price: 10000,
    kcall: 400,
    amount: 0,
    get calcSum() {
      return this.price * this.amount
    },
    get calcK() {
      return this.kcall * this.amount
    }
  },
  freshBurger: {
    name: 'GAMBURGER FRESH',
    price: 20500,
    kcall: 500,
    amount: 0,
    get calcSum() {
      return this.price * this.amount
    },
    get calcK() {
      return this.kcall * this.amount
    }
  },
  freshCombo: {
    name: 'FRESH COMBO',
    price: 31900,
    kcall: 600,
    amount: 0,
    get calcSum() {
      return this.price * this.amount
    },
    get calcK() {
      return this.kcall * this.amount
    }
  },
}

let btn = document.querySelectorAll('.main__product-btn');

for (let i = 0; i < btn.length; i++) {

  btn[i].addEventListener('click', function () {

    // console.log(this.closest('.main__product').getAttribute('id'));

    prepare(this)

  })

}

function prepare(el) {

  let parent = el.closest('.main__product');
  let parentId = parent.getAttribute('id');
  let num = parent.querySelector('.main__product-num');
  let amount = product[parentId].amount;
  let sym = el.getAttribute('data-symbol');
  let price = parent.querySelector('.main__product-price span');
  let kcall = parent.querySelector('.main__product-kcall')


    if (sym == '+' && amount < 30) {
      amount++;
    } else if (sym == '-' && amount > 0) {
    amount--;
  }

  num.innerHTML = amount;
  product[parentId].amount = amount;
  price.innerHTML = product[parentId].calcSum;
  kcall.innerHTML = product[parentId].calcK;

}

let lvl = document.querySelector('.header__timer-extra') 

let lvlTime;

function lvlRec() {
  lvl.innerHTML++;
  if(lvl.innerHTML < 50) {
    lvlTime = setTimeout(() => {
      lvlRec()
    }, 300);
  } else if (lvl.innerHTML < 75) {
    lvlTime = setTimeout(() => {
      lvlRec()
    }, 400);
  } else if (lvl.innerHTML < 83) {
    lvlTime = setTimeout(() => {
      lvlRec()
    }, 500);
  }else if (lvl.innerHTML < 90) {
    lvlTime = setTimeout(() => {
      lvlRec()
    }, 600);
  }else if (lvl.innerHTML < 100) {
    lvlTime = setTimeout(() => {
      lvlRec()
    }, 1000);
  }else if (lvl.innerHTML == 100) {
    clearInterval(lvlTime)
  }
}
lvlRec()

let productInfo = document.querySelectorAll('.main__product-info');

for ( let k = 0; k < productInfo.length; k++) {

  productInfo[k].addEventListener('dblclick', function() {

    vie(this)
  })
}

let view = document.querySelector('.view' );
let viewClose = view.querySelector('.view__close')
let viewImg = view.querySelector('.view img');
let image = viewImg.getAttribute('src');

function vie(p) {

  let Mom = p.closest('.main__product');
  let img = Mom.querySelector('.main__product-img');
  let imgSrc = img.getAttribute('src')
 
  viewImg.setAttribute('src', imgSrc);
  viewImg.style.height = '85vh';
  viewImg.style.width = 'unset';
  view.style.justifyContent = 'center';
  view.style.alignItems = 'center';
  view.style.display = 'flex';
  
}

viewClose.addEventListener('click', function () {
  view.style.display = 'none';
})