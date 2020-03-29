<template>
<div>
    <div class = "itempopup" id = "itempopup">
      <div class = "popupcard">
        <button onclick="closeItemFunction();" id = "popupclose">X</button>
        <div class = "image" :style="{'background-image': 'url(' + require('../assets/subwaybg.jpg') + ')'}"></div>
        <div class = "container">
          <div class = "top">
            Spicy Italian Sub
            <div class = "price">
              200.000d
            </div>
          </div>
          <div class = "options">
            <div class = "title">Select options</div>
            <div class = "selectoptions">
              <form>
                  <div><input type="radio">Cookie Meal <span class = "price">+ 50.000d </span></div>
                  <div><input type="radio">Cookie Meal <span class = "price">+ 50.000d </span></div>
                  
                
                
                
              </form>
            </div>
            <div class = "specialmessage">
              <div class = "title">Special instructions</div>
              <textarea rows = "3" placeholder = "Let us know if you have any special instructions">a</textarea>
            </div>
          </div>
        </div>
        <div class = "checkoutbtm">
          <table>
            <tr>
              <td>
                 <button class = "minus">-</button>
                    <span class = "unit">1</span>
                    <button class = "plus">+</button>
              </td>
              <td class = "td-checkout"><button id = "checkoutbtm">Add to cart</button></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'PopUp',

}

</script>

<style scoped lang="scss">

#popupclose {
  position: absolute;
  right: 10px;
  top: 10px;
  height: 28px;
  width: 28px;
  line-height: 28px;
  padding: 0 !important;
  font-size: 1rem;
  font-weight: 700;
  color: #D70F64;
  cursor: pointer;
  background: white;
  border-radius: 1000px;
  border: 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.checkoutbtm {
  width: calc(100% - 23px);
  border-top: 1px solid #ebebeb;
  margin-top: 10px;
  padding: 10px 20px 10px 8px;
  
  table {
    width: 100%;
  }

  #checkoutbtm {
    width: 100%;
    padding: 18px;
    background: #D70F64;
    border: 0;
    box-shadow: none;
    color: white;
    border-radius: 3px;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .td-checkout {
    text-align: right;
    width: 80%;
  }

  .plus, .minus {
    background: none;
    border: 0;
    color: #D70F64;
    font-family: Nunito;
    font-weight: 400;
    font-size: 1.8rem;
    padding: 10px;
    cursor: pointer;
  }



  .unit {
    display: inline-block;
    width: 20px;
    text-align: center;
    font-weight: 600;
    font-size: 1.1rem;
    position: relative;
    top: -1px;
    
  }
}

.itempopup::-webkit-scrollbar {
    display: none;
}

.itempopup {
  position: fixed;
  background: rgba(0,0,0,0.4);
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: none;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  text-align: left;
  font-family: Nunito;
  color: #333;

  .image {
    width: 100%;
    height: 250px;
    display: block;
    overflow: hidden;
    background-size: cover !important;
    background-position: 50% 50% !important;
  }
  .container {
    padding: 20px;
    overflow: hidden;
    .top {
      font-size: 1.3rem;
      font-weight: 700;
      border-bottom: 1px solid #ebebeb;
      padding-bottom: 20px;
      margin-bottom: 20px;
      .price {
        float: right;
        text-align: right;
        font-weight: 400;
        color: #707070;
        font-size: 1.1rem;
      }
    }
    .options {
      .title {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 10px;
      }
      
    }
  }
}
.selectoptions {
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 15px;
  margin-bottom: 20px;
  
  .price {
    text-align: right;
    color: #707070;
    float: right;
  }
  
  input {
    margin-left: -1px;
    margin-right: 10px;
  }

  form div {
      padding: 10px 0;
  }

  
}
.popupcard {
  width: 600px;
  display: block;
  background: white;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

textarea {
  width: calc(100% - 20px);
  border: 1px solid #dbdbdb;
  resize: none;
  font-family: Nunito;
  color: #333;
  font-size: 1rem;
  padding: 10px;
}

@media screen and (max-width: 650px) {
    .popupcard {
    width: 100%;
    margin-top: 0;
    }
    .itempopup .image {
        height: 200px;
    }
}
@media screen and (max-width: 500px) {
    .itempopup .image {
        height: 170px;
    }
    
    .itempopup .container .top {
        font-size: 1.1rem;
        .price {
            font-size: 1rem;
        }
    }
    .price {
        font-size: 0.95rem;
    }
    .itempopup .container .options {
        .title {
            font-size: 0.95rem;
        }
        .selectoptions {
            td.option {
                font-size: 0.95rem;
            }
        }
    }
    textarea {
        font-size: 0.9rem;
    }
    .checkoutbtm {
        padding: 5px 20px 5px 8px;
    }
    .checkoutbtm .td-checkout {
        width: 60%;
        #checkoutbtm {
            font-size: 0.8rem;
        }
    }
}
</style>